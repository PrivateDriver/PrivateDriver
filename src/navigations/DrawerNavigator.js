import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text, SafeAreaView, StyleSheet, Image, Animated } from 'react-native'
import { Events, Drivers, Vehicles, Clients } from '../screens'
import BottomTabNavigator from './BottomTabNavigator'
import { Colors } from '../components/styles'
import CustomDrawer from '../components/CustomDrawer'

const { brand, tertiary, secondary } = Colors

const data = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
  // Add more items as needed
]

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Event" component={Events} />
      <Drawer.Screen name="Client" component={Clients} />
      <Drawer.Screen name="Driver" component={Drivers} />
      <Drawer.Screen name="Vehicle" component={Vehicles} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
