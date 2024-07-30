import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { Agenda } from 'react-native-calendars';
import CalendarItem from '../../../components/calendar/CalendarItem';

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

        // Sort the dates
        const sortedDates = Object.keys(formattedEvents).sort();

        // Set the first event date
        if (sortedDates.length > 0) {
          setFirstEventDate(sortedDates[0]);
        }

        console.log('Formatted Events:', formattedEvents); // Log the formatted events
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
        Alert.alert('Error', 'Failed to load events. Please try again later.');
      }
    }

    loadData().catch((error) => {
      console.error('Unhandled promise rejection:', error);
    });
  }, []);

  const handleUpdateEvent = async (updatedEvent: Event) => {
    try {
      console.log('Updating event:', updatedEvent);
      await axios.put(`https://limo-app-server.loca.lt/events/${updatedEvent.id}`, updatedEvent);
      console.log('Event updated successfully');

      // Update the local state
      setEvents((prevEvents) => {
        const date = updatedEvent.start_time.split('T')[0];
        const updatedEvents = { ...prevEvents };
        if (updatedEvents[date]) {
          const eventIndex = updatedEvents[date].findIndex(event => event.id === updatedEvent.id);
          if (eventIndex !== -1) {
            updatedEvents[date][eventIndex] = updatedEvent;
          }
        }
        return updatedEvents;
      });
    } catch (error) {
      console.error('Error updating event:', error);
      Alert.alert('Error', 'Failed to update event. Please try again later.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={events}
        selected={firstEventDate} // Start with the first event date
        renderItem={(item) => <CalendarItem item={item} onUpdate={handleUpdateEvent} />}
        renderEmptyDate={() => <View><Text>No Events</Text></View>}
        rowHasChanged={(r1, r2) => r1.id !== r2.id}
        pastScrollRange={12} // Allow scrolling to past dates
        futureScrollRange={12} // Allow scrolling to future dates
      />
    </View>
  );
};

export default CalendarEventScreen;