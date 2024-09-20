// CalendarEventScreen.tsx
import React, { useState, useEffect } from 'react'
import { View, Alert } from 'react-native'
import axios from 'axios'
import axiosRetry from 'axios-retry'
import { Agenda } from 'react-native-calendars'
import { Colors } from '../../../components/styles'
import CalendarItem from '../../../components/calendar/CalendarItem'
import { useIsFocused, NavigationProp } from '@react-navigation/native'
import { useTabBarVisibility } from '../../../context/TabBarVisibilityContext'
import { useSelector } from 'react-redux'

const { brand, tertiary } = Colors

interface Event {
  id: string
  driver_id: string
  start_time: string
}

interface Events {
  [date: string]: Event[]
}

interface CalendarEventScreenProps {
  navigation: NavigationProp<any>
}

const CalendarEventScreen: React.FC<CalendarEventScreenProps> = ({ navigation }) => {
  const [events, setEvents] = useState<Events>({})
  const [firstEventDate, setFirstEventDate] = useState<string | null>(null)
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false)
  const isFocused = useIsFocused()
  const { setIsTabBarVisible } = useTabBarVisibility()

  const user = useSelector((state: any) => state.user)

  useEffect(() => {
    axiosRetry(axios, { retries: 3 })

    async function loadData() {
      try {
        const response = await axios.get('https://limo-app-server.loca.lt/events')
        if (response.data) {
          const data: Event[] = response.data
          const formattedEvents: Events = {}
          data.forEach(event => {
            const date = event.start_time.split('T')[0]
            if (!formattedEvents[date]) {
              formattedEvents[date] = []
            }
            formattedEvents[date].push(event)
          })
          setEvents(formattedEvents)
          if (data.length > 0) {
            setFirstEventDate(data[0].start_time.split('T')[0])
          }
        } else {
          Alert.alert('Error', 'No data received from server')
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to load events')
      }
    }

    loadData()

    console.log('CalendarEventScreen User State ===', user)
  }, [])

  useEffect(() => {
    if (isFocused) {
      const parentNavigator = navigation.getParent()
      if (parentNavigator) {
        parentNavigator.setOptions({ tabBarStyle: { display: isCalendarExpanded ? 'none' : 'flex' } })
      }
    }
  }, [isFocused, isCalendarExpanded, navigation])

  const renderItem = (item: Event) => {
    return (
      <CalendarItem
        item={item}
        onUpdate={updatedItem => {
          console.log('Updated item:', updatedItem)
        }}
      />
    )
  }

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
        showOnlySelectedDayItems={false}
        onCalendarToggled={calendarOpened => {
          setIsCalendarExpanded(calendarOpened)
          setIsTabBarVisible(!calendarOpened)
        }}
      />
    </View>
  )
}

export default CalendarEventScreen
