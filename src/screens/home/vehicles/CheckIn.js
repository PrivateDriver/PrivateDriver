import React from 'react'
import { Button, View, SafeAreaView } from 'react-native'

const CheckIn = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView>
        <Button title="Events" onPress={() => navigation.navigate('Events')} />

        <Button title="Vehicles" onPress={() => navigation.navigate('Vehicles')} />
      </SafeAreaView>
    </View>
  )
}

export default CheckIn
