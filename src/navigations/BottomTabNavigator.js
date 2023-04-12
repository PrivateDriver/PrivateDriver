import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Colors } from '../components/styles'
import { Home, Events, Drivers, Vehicles, Clients } from '../screens'

const Tab = createBottomTabNavigator()
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: darkLight }}>{children}</View>
  </TouchableOpacity>
)
const { brand, tertiary, darkLight } = Colors

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: brand,
        tabBarInactiveTintColor: tertiary,

        ...styles.shadow,
        tabBarIcon: ({ color }) => {
          const icons = {
            Home: 'home-sharp',
            Event: 'md-calendar-sharp',
            Driver: 'md-person-sharp',
            Client: 'md-people-sharp',
            Vehicle: 'md-car-sport-sharp',
            Plus: 'md-add-circle-sharp',
          }

          return <Icon name={icons[route.name]} size={25} color={color} />
        },
      })}
    >
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen name="Event" component={Events} />
      <Tab.Screen name="Driver" component={Drivers} />
      <Tab.Screen
        name="Plus"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: -3 }}>
              <Icon name="md-add-circle-sharp" size={75} color={focused ? brand : tertiary} />
            </View>
          ),

          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen name="Client" component={Clients} />
      <Tab.Screen name="Vehicle" component={Vehicles} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    elevation: 5,
    padding: 8,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#333333',
    shadowOffset: { width: 0, height: -11 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },

  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
  },
})

export default BottomTabNavigator
