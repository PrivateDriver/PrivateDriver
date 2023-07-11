import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Colors } from '../components/styles'
import { Home, Events, Drivers, Vehicles, Clients, CheckOut } from '../screens'
import { useNavigation } from '@react-navigation/native'
import HomeStackNavigator from './HomeStackNavigator'

const Tab = createBottomTabNavigator()
const { brand, tertiary, darkLight } = Colors

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
    <View style={styles.centerOffsetButton}>{children}</View>
  </TouchableOpacity>
)

const BottomTabNavigator = () => {
  const navigation = useNavigation()
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        tabBarShowLabel: false,
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
          }

          return <Icon name={icons[route.name]} size={25} color={color} />
        },
      })}
    >
      {/* <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          title: '',
          headerShown: false,
        }}
      /> */}
      <Tab.Screen
        name="Event"
        component={Events}
        options={{
          title: 'Events',
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <View>
                  <Icon name="menu" size={30} color="black" style={{ marginLeft: 20 }} />
                </View>
              </TouchableOpacity>
            )
          },
        }}
      />
      <Tab.Screen
        name="Driver"
        component={Drivers}
        options={{
          title: 'Driver',
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <View>
                  <Icon name="menu" size={30} color="black" style={{ marginLeft: 20 }} />
                </View>
              </TouchableOpacity>
            )
          },
        }}
      />
      <Tab.Screen
        name="Plus"
        component={HomeStackNavigator}
        options={{
          title: '',
          headerShown: true,

          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconOffset}>
              <Icon name="md-add-circle-sharp" size={75} color={(focused = brand)} />
            </View>
          ),

          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Client"
        component={Clients}
        options={{
          title: 'Client',
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <View>
                  <Icon name="menu" size={30} color="black" style={{ marginLeft: 20 }} />
                </View>
              </TouchableOpacity>
            )
          },
        }}
      />
      <Tab.Screen
        name="Vehicle"
        component={Vehicles}
        options={{
          title: 'Vehicle',
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <View>
                  <Icon name="menu" size={30} color="black" style={{ marginLeft: 20 }} />
                </View>
              </TouchableOpacity>
            )
          },
        }}
      />
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
    shadowColor: '#333333',
    shadowOffset: {
      width: 0,
      height: 9,
    },

    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5,
  },

  centerOffsetButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',

    backgroundColor: darkLight,
  },

  tabIconOffset: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -4,
  },
})

export default BottomTabNavigator
