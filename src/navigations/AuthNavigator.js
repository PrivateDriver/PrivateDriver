import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login, Signup, ForgotPassword } from '../screens'
import DrawerNavigator from './DrawerNavigator'

const AuthStack = createNativeStackNavigator()

function AuthNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      <AuthStack.Screen name="Signup" options={{ headerShown: false }} component={Signup} />
      <AuthStack.Screen name="ForgotPassword" options={{ headerShown: false }} component={ForgotPassword} />
      <AuthStack.Screen name="Events" component={DrawerNavigator} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator
