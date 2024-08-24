import React, { useState, useEffect } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { Agenda } from 'react-native-calendars';
import { Colors } from '../../../components/styles';
import CalendarItem from '../../../components/calendar/CalendarItem'; // Import CalendarItem component
import { useIsFocused } from '@react-navigation/native'; // Import useIsFocused

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

const CalendarEventScreen: React.FC = ({ navigation }) => {
  const [events, setEvents] = useState<Events>({});
  const [firstEventDate, setFirstEventDate] = useState<string | null>(null);
  const [isMonthlyView, setIsMonthlyView] = useState(false); // State for view mode
  const isFocused = useIsFocused(); // Check if the screen is focused

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

  useEffect(() => {
    if (isFocused) {
      navigation.setOptions({ tabBarVisible: !isMonthlyView });
    }
  }, [isFocused, isMonthlyView, navigation]);

  const renderItem = (item: Event) => {
    return <CalendarItem item={item} onUpdate={(updatedItem) => {
      // Handle item update
    }} />;
  };

  return (
    <View style={{ flex: 1 }}>
      
      <Agenda
        items={events}
        selected={firstEventDate}
        renderItem={renderItem}
        theme={{
          agendaDayTextColor: brand,
          agendaDayNumColor: brand,
          agendaTodayColor: tertiary,
          agendaKnobColor: brand,
        }}
        showOnlySelectedDayItems={!isMonthlyView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Add your styles here
});

export default CalendarEventScreen;