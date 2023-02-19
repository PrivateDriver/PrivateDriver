import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components';

import { Home, Events, Drivers, Clients, Vehicles } from '../screens'

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

              if (route.name === Home) {
                iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
              } else if (route.name === Events) {
                iconName = focused ? 'settings' : 'settings-outline';
              }

          return <Icon name={iconName} size={22} color={color} />
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


