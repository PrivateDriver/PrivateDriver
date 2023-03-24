import React, { useEffect, useState } from 'react'
import { Button, View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native'

import axios from 'axios'

const EventScreen = ({ navigation }) => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    async function loadData() {
      const response = await axios.get('https://limo-app-server.loca.lt/events')
      console.log(response.data)
      setEvents(response.data)
    }
    loadData()
  }, [])

  // Flatlist component
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )

  // Refactor Buttons to BottomTabNavigator
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={events}
        renderItem={({ item: event }) => <Item title={event.mileage} />}
        keyExtractor={item => item.id}
      />

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
        <View>
          <Text>There are {events.length} events</Text>
        </View>

        <SafeAreaView>
          <Button title="Drivers" onPress={() => navigation.navigate('Drivers')} />

          <Button title="Clients" onPress={() => navigation.navigate('Clients')} />

          <Button title="Vehicles" onPress={() => navigation.navigate('Vehicles')} />
        </SafeAreaView>
      </View>
    </SafeAreaView>
  )
}

//// Refactor Styles for Flatlist
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#8e99a3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
})
////

export default EventScreen
