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

  // Refactor Buttons to BottomTabNavigator
  const scrollY = React.useRef(new Animated.Value(0)).current

  return (
    <SafeAreaView>
      <View style={styles.pageContainer}>
        <View style={styles.topContainer}>
          <Image
            source={require('../../../assets/Calendar.png')}
            style={{ width: undefined, height: '100%', aspectRatio: 1 }}
          />
        </View>
        <Animated.FlatList
          data={events}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
          // keyExtractor={item => item.id}
          renderItem={({ item, index }) => {
            const inputRange = [-1, 0, 80 * index, 180 * (index + 8)]
            const opacityInputRange = [-1, 0, 80 * index, 80 * (index + 2)]
            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1, 1, 1, 0],
            })
            const opacity = scrollY.interpolate({
              inputRange: opacityInputRange,
              outputRange: [1, 1, 1, 0],
            })
            return (
              <Animated.View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  height: 80,
                  borderRadius: 10,
                  margin: 3,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 11 },
                  shadowOpacity: 0.3,
                  shadowRadius: 20,
                  backgroundColor: '#fff',
                  opacity,
                  transform: [{ scale }],
                }}
              >
                <View style={styles.listAvatar}>
                  <Image source={require('../../../assets/icons/icon-calendar.png')} style={styles.listAvatarImg} />
                </View>

                <View>
                  <Text style={styles.listHeader}>{item.id}</Text>
                  <Text style={styles.listHeadline}>{item.mileage}</Text>
                  <Text style={styles.listSubtitle}>{item.start_time}</Text>
                </View>
              </Animated.View>
            )
          }}
        />
      </View>

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
  pageContainer: {
    backgroundColor: '#000',
    height: '100%',
  },

  topContainer: {
    height: '45%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  // container: {
  //   flexDirection: 'row',
  //   padding: 10,
  //   height: 80,
  //   borderRadius: 10,
  //   margin: 8,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 11 },
  //   shadowOpacity: 0.3,
  //   shadowRadius: 20,
  //   backgroundColor: '#fff',
  //   transform: [{ scale: 1 }],
  // },

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
    paddingVertical: 0,
  },

  avatarContainer: {
    borderRadius: 100,
    height: 50,
    width: 50,
  },

  listAvatar: {
    height: 40,
    width: 40,
    marginRight: 20,
    alignSelf: 'center',
  },

  listAvatarImg: {
    height: 40,
    width: 40,
    margin: 'auto',
    display: 'block',
  },

  // title: {
  //   fontWeight: 'bold',
  //   fontSize: 24,
  //   marginLeft: 20,
  // },

  // subtitle: {
  //   fontSize: 14,
  //   color: '#999',
  //   marginLeft: 20,
  // },

  // separator: {
  //   height: 1,
  //   width: '100%',
  //   backgroundColor: '#ccc',
  // },
})

////

export default EventScreen
