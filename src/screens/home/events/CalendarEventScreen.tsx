import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {View, Text, TouchableOpacity} from 'react-native';
import {Agenda, AgendaEntry} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import { Colors } from '../../../components/styles';

const { brand, tertiary, darkLight } = Colors

const CalendarEventScreen = (reservation: AgendaEntry, ) => {
  const [events, setEvents] = useState({});

  useEffect(() => {
    async function loadData() {
      const response = await axios.get('https://limo-app-server.loca.lt/events')
      console.log(response.data)
      setEvents(response.data)
    }
    loadData()
  }, [])

  interface Event {
    driver_id: number;
    company_id: number;
  }

 

  const renderItem = (event: Event) => {
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
              <Text>{event.driver_id}</Text>
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

        renderItem={CalendarEventScreen}
       
      />
    </View>
  );
};

export default CalendarEventScreen;