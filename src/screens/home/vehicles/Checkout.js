import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Button, View, SafeAreaView } from 'react-native'
import { Formik } from 'formik'
import {
  StyledContainerCheckout,
  StyledInput,
  StyledButton,
  ButtonText,
  StyledFormArea,
  SubTitle,
} from '../../../components/styles'

const CheckOut = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StyledContainerCheckout>
        <SubTitle>Mileage</SubTitle>
      </StyledContainerCheckout>
    </SafeAreaView>
  )
}

export default CheckOut
