import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, Animated } from 'react-native'
import axios from 'axios'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  PageContainer,
  TopContainer,
  BottomContainer,
  ListContainer,
  ListTitle,
  ListSubtitle,
  Colors,
} from '../../../components/styles'

const { darkLight } = Colors

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

  const scrollY = React.useRef(new Animated.Value(0)).current

  return (
    <SafeAreaView>
      <PageContainer>
        <TopContainer>
          <Image
            source={require('../../../assets/Calendar.png')}
            style={{ width: undefined, height: '100%', aspectRatio: 1 }}
          />
        </TopContainer>
        <BottomContainer>
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
                    backgroundColor: '#fff',
                    opacity,
                    transform: [{ scale }],
                  }}
                >
                  <Icon
                    name="calendar"
                    size={40}
                    color={darkLight}
                    style={{ marginRight: 20, marginTop: 5, marginLeft: 5 }}
                  />
                  <ListContainer>
                    <ListTitle>
                      <Text>{item.event_type}</Text>
                    </ListTitle>
                    <ListSubtitle>
                      <Text>
                        {item.event_date} {item.start_time}
                      </Text>
                    </ListSubtitle>
                    <ListSubtitle>
                      <Text>{item.company_id}</Text>
                    </ListSubtitle>
                  </ListContainer>
                </Animated.View>
              )
            }}
          />
        </BottomContainer>
      </PageContainer>
    </SafeAreaView>
  )
}

export default EventScreen
