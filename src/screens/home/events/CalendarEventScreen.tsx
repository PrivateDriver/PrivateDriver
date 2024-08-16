import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { Agenda } from 'react-native-calendars';
import CalendarItem from '../../../components/calendar/CalendarItem';
import { Colors } from '../../../components/styles';

const { brand, tertiary } = Colors

interface Event {
  id: string;
  driver_id: string;
  start_time: string;
  // Add other event properties here
}

interface Events {
  [date: string]: Event[];
}

const CalendarEventScreen: React.FC = () => {
  const [events, setEvents] = useState<Events>({});
  const [firstEventDate, setFirstEventDate] = useState<string | null>(null);

  useEffect(() => {
    axiosRetry(axios, { retries: 3 });

    async function loadData() {
      try {
        console.log('Fetching events...');
        const response = await axios.get('https://limo-app-server.loca.lt/events');
        console.log('Response received:', response);
        const data: Event[] = response.data;
        const formattedEvents: Events = {};

        data.forEach((event) => {
          const date = event.start_time.split('T')[0]; // Extract the date part from start_time
          if (!formattedEvents[date]) {
            formattedEvents[date] = [];
          }
          formattedEvents[date].push(event);
        });

        setEvents(formattedEvents);
        setFirstEventDate(Object.keys(formattedEvents)[0]);
      } catch (error) {
        console.error('Error fetching events:', error);
        Alert.alert('Error', 'Failed to fetch events. Please try again later.');
      }
    }

    loadData();
  }, []);

  const handleUpdateEvent = useCallback(async (updatedEvent: Event) => {
    try {
      setEvents((prevEvents) => {
        const updatedEvents = { ...prevEvents };
        const date = updatedEvent.start_time.split('T')[0];
        if (updatedEvents[date]) {
          updatedEvents[date] = updatedEvents[date].map((event) =>
            event.id === updatedEvent.id ? updatedEvent : event
          );
        }
        return updatedEvents;
      });
    } catch (error) {
      console.error('Error updating event:', error);
      Alert.alert('Error', 'Failed to update event. Please try again later.');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Agenda
        items={events}
        selected={firstEventDate}
        renderItem={(item) => <CalendarItem item={item} onUpdate={handleUpdateEvent} />}
        renderEmptyDate={() => (
          <View>
            <Text>No Events</Text>
          </View>
        )}
        rowHasChanged={(r1, r2) => r1.id !== r2.id}
        pastScrollRange={12}
        futureScrollRange={12}
        theme={{
          selectedDayBackgroundColor: brand,
          agendaDayTextColor: brand,
          agendaDayNumColor: tertiary,
          agendaTodayColor: brand,
          agendaKnobColor: tertiary,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CalendarEventScreen;