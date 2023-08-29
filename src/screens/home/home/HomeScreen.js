import React from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native'
import { StyledButton, ButtonText } from '../../../components/styles'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> HOME SCREEN</Text>
      <StyledButton
        onPress={() => {
          navigation.navigate('CheckoutForm')
        }}
      >
        <ButtonText>Check Out Vehicle</ButtonText>
      </StyledButton>
      <StyledButton
        onPress={() => {
          navigation.navigate('CheckinForm')
        }}
      >
        <ButtonText>Check In Vehicle</ButtonText>
      </StyledButton>
    </View>
  )
}

export default HomeScreen
