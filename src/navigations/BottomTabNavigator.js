import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet } from 'react-native';
import { Colors } from '../components/styles'
import { Home, Events } from '../screens'

const Tab = createBottomTabNavigator();
const { brand, tertiary } = Colors;

export default function BottomTabNavigator() {

  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ color, size }) => {
          const icons= {
            Home: 'home-sharp',
            Events: 'md-calendar-sharp'
          }

          return (
            <Icon 
              name={icons[route.name]} 
              size={25} 
              color={color} 
              />)
        },
         })
}
      >

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Events" component={Events} />
      {/* <Tab.Screen name="Drivers" component={Drivers} />
      <Tab.Screen name="Clients" component={Clients} />
      <Tab.Screen name="Vehicles" component={Vehicles} />        */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: {brand},
    borderTopWidth: 0,
    bottom: 15,
    right: 20,
    left: 20,
    height: 92,
  },
});

