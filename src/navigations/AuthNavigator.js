import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login, Signup, ForgotPassword } from '../screens'
import BottomTabNavigator from './BottomTabNavigator'
import Drawer from './Drawer'

const Stack = createNativeStackNavigator()

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name="Signup" options={{ headerShown: false }} component={Signup} />
      <Stack.Screen name="ForgotPassword" options={{ headerShown: false }} component={ForgotPassword} />
      <Stack.Screen name="Events" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
