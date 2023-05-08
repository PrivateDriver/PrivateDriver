import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '../screens'
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createNativeStackNavigator()

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      {/* <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Events" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
