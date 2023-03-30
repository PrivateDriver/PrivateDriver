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

  const SPACING = 20
  const AVATAR_SIZE = 70

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
                <Image source={{ uri: '../../assets/icons/icon-calendar.png' }} style={styles.avatar} />
              </View>
              <View>
                <Text style={styles.listHeader}>{item.driver_id}</Text>
                <Text style={styles.subtitle}>{item.mileage}</Text>
                <Text style={styles.subtitle}>{item.start_time}</Text>
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
  },

  listHeader: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  listHeadline: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
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
    height: 55,
    width: 55,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: '#000000',
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
