import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Button } from 'react-native'

//formik
import { Formik } from 'formik';
//icons
import { Octicons, Ionicons } from '@expo/vector-icons';

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
    
} from '../../../components/styles';
import { View } from 'react-native'

//Colors
const { brand, tertiary } = Colors;

const LoginScreen = ({navigation}) => {

        const [hidePassword, setHidePassword] = useState(true);

    return (
        <StyledContainer>
            <StatusBar style="light-dark" />
            <InnerContainer>
                <PageLogo resizeMode="contain" source={require('../../../assets/privatedriver-logo-app.png')}/>
                <SubTitle>Account Login</SubTitle>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}>
                    {({handleChange, handleBlur, handleSubmit, values}) => (
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
                                    <TextLinkContent> Signup</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                            
                        </StyledFormArea>
                    )}
                </Formik>
                <Button title="Events" onPress={() => navigation.navigate('Events')}
      />
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
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
    )
}

export default LoginScreen;