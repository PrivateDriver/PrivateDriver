import { createDrawerNavigator } from '@react-navigation/drawer'

import { Events, Drivers, Vehicles, Clients } from '../screens'
import BottomTabNavigator from './BottomTabNavigator'
import { Colors } from '../components/styles'
import CustomDrawer from '../components/CustomDrawer'

const { brand, tertiary, secondary } = Colors

const Drawer = createDrawerNavigator()

function DrawerNavigator() {
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
