import React from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native'

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Forgot Password </Text>
      <SafeAreaView>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </SafeAreaView>
    </View>
  )
}

export default ForgotPassword
