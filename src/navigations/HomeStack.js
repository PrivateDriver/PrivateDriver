import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Events, Drivers, Vehicles, Clients } from '../screens'

const Stack = createNativeStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Event" component={Events} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Client" component={Clients} />
      <Stack.Screen name="Driver" component={Drivers} />
      <Stack.Screen name="Vehicle" component={Vehicles} />
    </Stack.Navigator>
  )
}

export default HomeStack
