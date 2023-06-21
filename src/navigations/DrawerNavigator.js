import { createDrawerNavigator } from '@react-navigation/drawer'
// import { View, Text, SafeAreaView, Flatlist, Image,  } from 'react-native'
import { ClientProfile, DriverProfile, VehicleProfile } from '../screens'
import BottomTabNavigator from './BottomTabNavigator'
import { Colors } from '../components/styles'
import CustomDrawer from '../components/CustomDrawer'

const { brand, tertiary, secondary } = Colors

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  const data = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    // Add more items as needed
  ]
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="ClientProfile" component={ClientProfile} />
      <Drawer.Screen name="DriverProfile" component={DriverProfile} />
      <Drawer.Screen name="VehicleProfile" component={VehicleProfile} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
