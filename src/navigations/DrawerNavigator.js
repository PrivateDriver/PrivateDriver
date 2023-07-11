import { createDrawerNavigator } from '@react-navigation/drawer'
import { ClientProfile, DriverProfile, VehicleProfile } from '../screens'
import BottomTabNavigator from './BottomTabNavigator'
// import HomeStackNavigator from './HomeStackNavigator'
import CustomDrawer from '../components/CustomDrawer'

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
      {/* <Drawer.Screen name="HomeStack" component={HomeStackNavigator} /> */}
      <Drawer.Screen name="ClientProfile" component={ClientProfile} />
      <Drawer.Screen name="DriverProfile" component={DriverProfile} />
      <Drawer.Screen name="VehicleProfile" component={VehicleProfile} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
