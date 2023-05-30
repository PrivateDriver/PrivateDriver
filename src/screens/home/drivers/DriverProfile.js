import React from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native'

const DriverProfile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> DriverProfile</Text>
      <SafeAreaView>
        <Button title="Client" onPress={() => navigation.navigate('Client')} />
      </SafeAreaView>
    </View>
  )
}

export default DriverProfile
