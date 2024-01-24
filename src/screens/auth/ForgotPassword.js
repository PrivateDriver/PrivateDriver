// import React from 'react'
// import { Button, View, Text, SafeAreaView } from 'react-native'

// const ForgotPassword = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text> Forgot Password </Text>
//       <SafeAreaView>
//         <Button title="Login" onPress={() => navigation.navigate('Login')} />
//       </SafeAreaView>
//     </View>
//   )
// }

// export default ForgotPassword

import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { View, Alert } from 'react-native';
import { Formik, useField, Text } from 'formik';
import * as Yup from 'yup';

import { Octicons, Ionicons } from '@expo/vector-icons'

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledButton,
  ButtonText,
  Colors,
  StyledInputLabel,
  StyledTextInput,
} from '../../components/styles';

const { brand, tertiary } = Colors

const ForgotPassword = ({ navigation }) => {
  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here, you would typically make an API call to your backend service to initiate the password reset process.
    // If the API call fails (e.g., because the email is not in the database), you can use setErrors to display an error message.
    setErrors({ email: 'This email is not in our database' });

    setSubmitting(false);
    Alert.alert(`A password reset link has been sent to ${values.email}`);
  };

  return (
    <StyledContainer>
      <StatusBar style="light-dark" />
      <InnerContainer>
        <PageLogo resizeMode="contain" source={require('../../assets/icons/privatedriver-logo-app.png')} />
        <SubTitle>Account Login</SubTitle>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <StyledFormArea>
            <MyTextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Enter your email"
            />
            <StyledButton onPress={handleSubmit} title="Reset Password" />
            <ButtonText>SUBMIT</ButtonText>
          </StyledFormArea>
        )}
      </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  // add a red border if the field has been touched and is invalid
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched ? meta.error : '';
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={brand} />
        </RightIcon>
      )}
    </View>
  );
}

export default ForgotPassword;