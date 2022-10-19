import React from 'react';
import { StatusBar } from 'expo-status-bar';

// Formik
import { Formik } from 'formik';


import { 
    StyledContainer, 
    InnerContainer, 
    PageLogo, 
    PageTitle, 
    SubTitle, 
    StyledFormArea, 
} from './../components/styles';

import { View } from 'react-native';

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

                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

// const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {

export default Login;