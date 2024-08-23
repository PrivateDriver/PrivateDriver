import React, { useState, useEffect } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { Agenda } from 'react-native-calendars';
import { Colors } from '../../../components/styles';
import CalendarItem from '../../../components/calendar/CalendarItem'; // Import CalendarItem component

const { brand, tertiary } = Colors;

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
  const [isFullScreen, setIsFullScreen] = useState(false); // State for isFullScreen

  useEffect(() => {
    axiosRetry(axios, { retries: 3 });

    async function loadData() {
      try {
        console.log('Fetching events...');
        const response = await axios.get('https://limo-app-server.loca.lt/events');
        console.log('Response received:', response);

        if (response.data) {
          const data: Event[] = response.data;
          const formattedEvents: Events = {};
          data.forEach(event => {
            const date = event.start_time.split('T')[0];
            if (!formattedEvents[date]) {
              formattedEvents[date] = [];
            }
            formattedEvents[date].push(event);
          });
          setEvents(formattedEvents);
          if (data.length > 0) {
            setFirstEventDate(data[0].start_time.split('T')[0]);
          }
        } else {
          console.error('No data received:', response);
          Alert.alert('Error', 'No data received from server');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        Alert.alert('Error', 'Failed to load events');
      }
    }

    loadData();
  }, []);

  // Event handler to toggle isFullScreen state
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  // Define the onUpdate function
  const onUpdate = (updatedEvent: Event) => {
    // Logic to update the event in the state
    console.log('Event updated:', updatedEvent);
  };

  return (
    <View style={styles.container}>
      <Button title={isFullScreen ? "Switch to Weekly" : "Switch to Monthly"} onPress={toggleFullScreen} />
      <Agenda
        items={events}
        selected={firstEventDate}
        renderItem={(item, firstItemInDay) => <CalendarItem item={item} onUpdate={onUpdate} />}
        renderEmptyDate={() => <View />}
        rowHasChanged={(r1, r2) => r1.id !== r2.id}
        theme={{
          agendaDayTextColor: 'black',
          agendaDayNumColor: 'black',
          agendaTodayColor: brand,
          agendaKnobColor: tertiary,
        }}
        showClosingKnob={true}
        pastScrollRange={12}
        futureScrollRange={12}
        hideKnob={!isFullScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CalendarEventScreen;