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
    SubTitle, 
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledTextInput,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
} from '../../components/styles';

import { View } from 'react-native';

// colors
const { tertiary, brand, secondary } = Colors;


const Login = () => {
    
    const [hidePassword, setHidePassword,] = useState(true);

    return (
        <StyledContainer>
            <StatusBar style="light" />
            <InnerContainer>
                <PageLogo resizeMode="contain" source={require('../../assets/privatedriver-logo-app.png')} />
                <SubTitle>Account Login</SubTitle>
                <Line />

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                {({handleChange, handleBlur, handleSubmit, values, ...props}) => (
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
                            placeholder="* * * * * * * * * * * * "
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
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                       
                    </StyledFormArea>
                )}

                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
           <LeftIcon>
                <Octicons name={icon} size={30} color={tertiary} />
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
};

export default Login;