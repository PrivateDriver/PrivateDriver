import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, CheckOut, CheckIn } from '../screens'

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
      <HomeStack.Screen name="CheckOut" component={CheckOut} options={{ presentation: 'modal' }} />
      <HomeStack.Screen name="CheckIn" component={CheckIn} options={{ presentation: 'modal' }} />
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
