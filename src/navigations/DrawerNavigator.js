import { createDrawerNavigator } from '@react-navigation/drawer'

import { Events, Drivers, Vehicles, Clients } from '../screens'
import BottomTabNavigator from './BottomTabNavigator'

const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
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
