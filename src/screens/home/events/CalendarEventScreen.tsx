import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {View, Text, TouchableOpacity} from 'react-native';
import {Agenda, AgendaEntry} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import { Colors } from '../../../components/styles';

const { brand, tertiary, darkLight } = Colors

const CalendarEventScreen = (reservation: AgendaEntry, isFirst: boolean ) => {
  const [events, setEvents] = useState({});

  useEffect(() => {
    async function loadData() {
      const response = await axios.get('https://limo-app-server.loca.lt/events')
      console.log(response.data)

      const fetchedData = [
        { date: '2022-01-01', driver_id: 1, company_id: 1 },
        { date: '2022-01-01', driver_id: 2, company_id: 2 },
        { date: '2022-01-02', driver_id: 3, company_id: 3 },
        // more data...
      ];
  
      const eventsByDate = response.data.reduce((acc, event) => {
        const date = event.date; // replace 'date' with the actual property name in your event object
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(event);
        return acc;
      }, {});
  
      setEvents(eventsByDate);
    }
    loadData()
  }, [])

  interface AgendaEntry {
    driver_id: number;
    company_id: number;
  }

  const renderItem: (reservation: AgendaEntry, isFirst: boolean) => React.JSX.Element = (reservation, isFirst) => {
    // Use properties from the reservation object to render your item
    // For example, if reservation has a driver_id property:
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17,}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{reservation.driver_id}</Text>
              <Avatar.Text label="W" style={{backgroundColor: brand}} />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{
      flex: 1,

  }}>
      <Agenda
        items={events}
        renderItem={renderItem} // pass the renderItem function you've defined, not the component itself
      />
    </View>
  );
};

export default CalendarEventScreen;