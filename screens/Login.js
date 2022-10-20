import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

// Formik
import { Formik } from 'formik';

// icons
import { Octicons, Ionicons } from '@expo/vector-icons';

import { 
    StyledContainer, 
    InnerContainer, 
    PageLogo, 
    PageTitle, 
    SubTitle, 
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledTextInput,
    StyledButton,
    ButtonText,
    Colors,
} from './../components/styles';

import { View } from 'react-native';

// colors
const { tertiary, brand } = Colors;


const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="light" />
            <InnerContainer>
                <PageLogo resizeMode="contain" source={require('./../assets/privatedriver-logo-app.png')} />
                {/* <PageTitle>A Driver Driven App</PageTitle> */}
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                {({handleChange, handleBlur, handleSubmit, values, ...props}) => 
                <StyledFormArea>
                    <MyTextInput
                        label="Email Address"
                        icon="mail"
                        placeholder="your@email.com"
                        // placeholderTextColor={brand}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                    />

                    <MyTextInput
                        label="Password"
                        icon="lock"
                        placeholder="* * * * * * * * * * * * "
                        // placeholderTextColor={brand}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={true}
                        isPassword={true}
                    />

                </StyledFormArea>}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({ label, icon, isPassword, ...props }) => {
    return (
        <View>
           <LeftIcon>
                <Octicons name={icon} size={30} color={tertiary} />
           </LeftIcon>
              <StyledInputLabel>{label}</StyledInputLabel>
                <StyledTextInput {...props} />
              {isPassword && (
                    <RightIcon>
                        <Ionicons name="md-eye-off" size={30} color={brand} />
                    </RightIcon>
              )}
        </View>
    );
}

export default Login;