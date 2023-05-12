import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '../screens'
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createNativeStackNavigator()

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name="Events" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
