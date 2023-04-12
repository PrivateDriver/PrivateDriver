import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet } from 'react-native'
import { Colors } from '../components/styles'
import { Home, Events, Drivers, Vehicles, Clients } from '../screens'

const Tab = createBottomTabNavigator()
const { brand, tertiary } = Colors

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Home: 'home-sharp',
            Events: 'md-calendar-sharp',
            Drivers: 'md-person-sharp',
            Clients: 'md-people-sharp',
            Vehicles: 'md-car-sport-sharp',
          }

          return <Icon name={icons[route.name]} size={25} color={color} />
        },
      })}
    >
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Drivers" component={Drivers} styles={''} />
      <Tab.Screen name="Clients" component={Clients} />
      <Tab.Screen name="Vehicles" component={Vehicles} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: '#333333',
    borderTopWidth: 0,
    borderRadius: '10, 10, 0, 0',
    height: 55,
  },
})
