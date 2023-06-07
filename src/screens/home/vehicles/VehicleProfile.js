import React from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native'

const VehicleProfile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> VehicleProfile</Text>
      <SafeAreaView>
        <Button title="Client" onPress={() => navigation.navigate('Client')} />
      </SafeAreaView>
    </View>
  )
}

export default VehicleProfile
