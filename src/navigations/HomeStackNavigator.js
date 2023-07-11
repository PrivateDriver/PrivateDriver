import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, CheckOut, CheckIn } from '../screens'

const HomeStack = createNativeStackNavigator()

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="CheckOut" component={CheckOut} />
      <HomeStack.Screen name="CheckIn" component={CheckIn} />
    </HomeStack.Navigator>
  )
}

export default HomeStackNavigator
