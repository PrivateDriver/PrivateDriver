import { createDrawerNavigator } from '@react-navigation/drawer'

import { Home, Events, Drivers, Vehicles, Clients } from '../screens'

const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Event" component={Events} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Client" component={Clients} />
      <Drawer.Screen name="Driver" component={Drivers} />
      <Drawer.Screen name="Vehicle" component={Vehicles} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
