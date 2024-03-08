import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { View, Text, TouchableOpacity } from 'react-native'
import { Agenda, AgendaEntry } from 'react-native-calendars'
import { Card, Avatar } from 'react-native-paper'
import { Colors } from '../../../components/styles'

const { brand, tertiary, darkLight } = Colors

const CalendarEventScreen = (reservation: AgendaEntry, isFirst: boolean) => {
  const [events, setEvents] = useState({})

  useEffect(() => {
    async function loadData() {
      const response = await axios.get('https://limo-app-server.loca.lt/events')
      console.log('RESPONSE:\n', response.data)

      const items = {
        '2024-03-08': [{ name: 'item 1 - any js object' }],
        '2024-03-09': [{ name: 'item 2 - any js object', height: 80 }],
        '2024-03-10': [],
        '2024-03-11': [{ name: 'item 3 - any js object' }, { name: 'any js object' }],
      }

      // TODO sort by full date timestamp

      const eventsByDate = response.data.reduce((acc, event) => {
        const dateObj = new Date(event.start_time)
        const month = dateObj.getUTCMonth() + 1 // months from 1-12
        const day = dateObj.getUTCDate()
        const year = dateObj.getUTCFullYear()
        const pMonth = month.toString().padStart(2, '0')
        const pDay = day.toString().padStart(2, '0')
        const date = `${year}-${pMonth}-${pDay}`

        if (!acc[date]) {
          acc[date] = []
        }
        acc[date].push(event)
        return acc
      }, {})

      console.log('EVENTS:\n', eventsByDate)

      // const fetchedData = [
      //   { date: '2022-01-01', driver_id: 1, company_id: 1 },
      //   { date: '2022-01-01', driver_id: 2, company_id: 2 },
      //   { date: '2022-01-02', driver_id: 3, company_id: 3 },
      //   // more data...
      // ];

      // const eventsByDate = response.data.reduce((acc, event) => {
      //   const date = event.date; // replace 'date' with the actual property name in your event object
      //   if (!acc[date]) {
      //     acc[date] = [];
      //   }
      //   acc[date].push(event);
      //   return acc;
      // }, {});

      setEvents(eventsByDate)
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
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>DriverID: {reservation.driver_id}</Text>
              <Text>Mileage: {reservation.mileage}</Text>
              <Avatar.Text label="W" style={{ backgroundColor: brand }} />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{
      flex: 1,
    }}>
      <Agenda
        items={events}
        renderItem={renderItem} // pass the renderItem function you've defined, not the component itself
      />
    </View>
  )
}

export default CalendarEventScreen