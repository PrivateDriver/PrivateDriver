import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, CheckoutForm, CheckinForm } from '../screens'

const HomeStack = createNativeStackNavigator()

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen name="CheckoutForm" component={CheckoutForm} options={{ presentation: 'modal' }} />
      <HomeStack.Screen name="CheckinForm" component={CheckinForm} options={{ presentation: 'modal' }} />
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
