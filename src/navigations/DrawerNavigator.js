import { createDrawerNavigator } from '@react-navigation/drawer'
import { ClientProfile, DriverProfile, VehicleProfile } from '../screens'
import BottomTabNavigator from './BottomTabNavigator'
import CustomDrawer from '../components/CustomDrawer'
import { Colors } from '../components/styles'
import Icon from 'react-native-vector-icons/Ionicons'

const { primary, tertiary, brand } = Colors

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          drawerIcon: ({ focused }) => <Icon name="home-outline" size={24} color={focused ? tertiary : primary} />,
        }}
      />
      <Drawer.Screen
        name="Client Profile"
        component={ClientProfile}
        options={{
          drawerIcon: ({ focused }) => <Icon name="person-outline" size={24} color={focused ? tertiary : primary} />,
        }}
      />
      <Drawer.Screen
        name="Driver Profile"
        component={DriverProfile}
        options={{
          drawerIcon: ({ focused }) => <Icon name="person-outline" size={24} color={focused ? tertiary : primary} />,
        }}
      />
      <Drawer.Screen
        name="Vehicle Profile"
        component={VehicleProfile}
        options={{
          drawerIcon: ({ focused }) => <Icon name="car-outline" size={24} color={focused ? tertiary : primary} />,
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
