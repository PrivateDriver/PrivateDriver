import React, { useEffect, useState } from 'react'
import {
  Button,
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native'
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
  // const Item = ({ itemList }) => (
  //   <View style={styles.item}>
  //     <Text style={styles.title}>{itemList}</Text>
  //   </View>
  // )

  // Refactor Buttons to BottomTabNavigator
  return (
    <SafeAreaView>
      <FlatList
        data={events}
        keyExtractor={item => item.key}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.container}>
              <View>
                <Image source={{ required: '../../assets/icons/icon-calendar.png' }} style={styles.avatar} />
              </View>
              <View>
                <Text style={styles.listHeader}>{item.driver_id}</Text>
                <Text style={styles.listHeadline}>{item.mileage}</Text>
                <Text style={styles.listSubtitle}>{item.start_time}</Text>
              </View>
            </View>
          )
        }}
      />

      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
        <View>
          <Text>There are {events.length} events</Text>
        </View>

        <SafeAreaView>
          <Button title="Drivers" onPress={() => navigation.navigate('Drivers')} />

          <Button title="Clients" onPress={() => navigation.navigate('Clients')} />

          <Button title="Vehicles" onPress={() => navigation.navigate('Vehicles')} />
        </SafeAreaView>
      </View> */}
    </SafeAreaView>
  )
}

//// Refactor Styles for Flatlist
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    height: 80,
    borderRadius: 10,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 11 },
    shadowOpacity: 0.55,
    shadowRadius: 20,
    backgroundColor: '#fff',
  },

  listHeader: {
    height: 23,
    fontSize: 22,
    fontWeight: '500',

    alignItems: 'center',
    justifyContent: 'center',
  },

  listHeadline: {
    fontSize: 18,
    opacity: 0.7,
  },

  listSubtitle: {
    fontSize: 14,
    opacity: 0.6,
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },

  avatarContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    height: 89,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    height: 60,
    width: 60,
    marginRight: 20,
    backgroundColor: '#D9D9D9',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 20,
  },

  subtitle: {
    fontSize: 14,
    color: '#999',
    marginLeft: 20,
  },

  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
  },
})

////

export default EventScreen
