import React from 'react';
import { StatusBar } from 'expo-status-bar';


import { StyledContainer, InnerContainer, PageLogo, PageTitle } from './../components/styles';

const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="contain" source={require('./../assets/privatedriver-logo-app.png')} />
                {/* <PageTitle>A Driver Driven App</PageTitle> */}
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;