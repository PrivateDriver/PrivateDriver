import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, Animated } from 'react-native'
import axios from 'axios'
import { Colors } from '../../../components/styles'

const { brand, tertiary, lightGray } = Colors

const EventScreen = () => {
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
                  backgroundColor: lightGray,
                  opacity,
                  transform: [{ scale }],
                }}
              >
                <View style={styles.listAvatar}>
                  <Image source={require('../../../assets/icons/icon-calendar.png')} style={styles.listAvatarImg} />
                </View>

                <View>
                  <Text style={styles.listHeader}>{item.company_id}</Text>
                  <Text style={styles.listHeadline}>{item.mileage}</Text>
                  <Text style={styles.listSubtitle}>{item.start_time}</Text>
                </View>
              </Animated.View>
            )
          }}
        />
      </View>
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

  listHeader: {
    height: 23,
    fontSize: 16,
    fontWeight: '500',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listHeadline: {
    fontSize: 14,
    opacity: 0.7,
  },

  listSubtitle: {
    fontSize: 12,
    opacity: 0.6,
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
})

////

export default EventScreen
