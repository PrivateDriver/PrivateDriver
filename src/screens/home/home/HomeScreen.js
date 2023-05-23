import React from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> HOME SCREEN</Text>
      <SafeAreaView>
        <Button title="Driver" onPress={() => navigation.navigate('Driver')} />
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen
