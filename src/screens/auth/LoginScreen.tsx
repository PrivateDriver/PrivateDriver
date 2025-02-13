import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import axios from 'axios'

// formik
import { Formik, FormikHelpers } from 'formik'
// icons
import { Octicons, Ionicons } from '@expo/vector-icons'

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  Colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from '../../components/styles'

import { View, TextInputProps } from 'react-native'
import { useDispatch } from 'react-redux'

// Colors
const { brand, tertiary } = Colors

interface LoginScreenProps {
  navigation: any
}

interface FormValues {
  email: string
  password: string
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true)

  const dispatch = useDispatch()

  return (
    <StyledContainer>
      <StatusBar style="light" />
      <InnerContainer>
        <PageLogo resizeMode="contain" source={require('../../assets/icons/privatedriver-logo-app.png')} />
        <SubTitle>Account Login</SubTitle>
        <Formik
          initialValues={{ email: 'me@email.com', password: 'password' }}
          onSubmit={async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
            try {
              const payload = {
                user: {
                  email: values.email,
                  password: values.password,
                },
              }
              console.log(payload)

              // Login Auth
              const response = await axios.post('https://limo-app-server.loca.lt/api/auth', payload)
              if (response.status === 401) {
                console.log('Invalid credentials')
              }
              if (response.status === 200) {
                console.log('Logged in successfully ===', response.data)
                // response.data should be user object, then update the store
                dispatch({
                  type: 'LOGIN',
                  payload: response.data?.user || null,
                })

                // Actual auth work here....
                //
                // LocalStorage
                // The authorization header is what we need to
                //   save and send back in all future requests
                // console.log(response.headers.authorization)
                // localStorage.setItem('auth', response.headers.authorization)

                // Set a default for axios so all future requests
                // automatically get that header
                // If we use this code we don't need the localStorage business
                // since axios will automatically send the header for us.
                axios.defaults.headers.common['Authorization'] = response.headers.authorization

                // When you logout, send the DELETE /api/auth request and
                // then remove the auth header from axios
                // axios.defaults.headers.common['Authorization'] = null

                // Later on:
                //   const auth = localStorage.getItem('auth')
                //   const response = await axios.get('https://limo-app-server.loca.lt', { headers: { Authorization: auth } })

                // Now we can navigate to the home screen
                navigation.navigate('Events')
              }
            } catch (error) {
              // ERROR Logic here
            } finally {
              setSubmitting(false)
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="your@email.com"
                placeholderTextColor={tertiary}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />

              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * * * * *"
                placeholderTextColor={tertiary}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>LOGIN</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>Add another account to member profile?</ExtraText>
                <TextLink>
                  <TextLinkContent
                    onPress={() => {
                      navigation.navigate('Signup')
                    }}
                  >
                    Signup
                  </TextLinkContent>
                  <TextLinkContent
                    onPress={() => {
                      navigation.navigate('ForgotPassword')
                    }}
                  >
                    Forgot Password
                  </TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  )
}

interface MyTextInputProps extends TextInputProps {
  label: string
  icon: string
  isPassword?: boolean
  hidePassword?: boolean
  setHidePassword?: React.Dispatch<React.SetStateAction<boolean>>
}

const MyTextInput: React.FC<MyTextInputProps> = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon as keyof (typeof Octicons)['glyphMap']} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword && setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={brand} />
        </RightIcon>
      )}
    </View>
  )
}

export default LoginScreen
