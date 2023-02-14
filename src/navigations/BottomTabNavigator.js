import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Events, Drivers, Clients, Vehicles } from '../screens'

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Drivers" component={Drivers} />
      <Tab.Screen name="Clients" component={Clients} />
      <Tab.Screen name="Vehicles" component={Vehicles} />       
    </Tab.Navigator>
  );
}


