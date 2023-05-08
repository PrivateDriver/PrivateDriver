import styled from 'styled-components/native'
import Constants from 'expo-constants'

// const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
  primary: '#000000',
  secondary: '#ffffff',
  tertiary: '#8e99a3',
  darkLight: '#333333',
  brand: '#de8d1a',
  lightGray: '#f5f6fa',
}

export const { primary, secondary, tertiary, darkLight, brand } = Colors

//Login Styles
export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${Constants.statusBarHeight + 30}px;
  background-color: ${primary};
  align-items: center;
  justify-content: center;
`

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`

export const PageLogo = styled.Image`
  width: 325px;
  height: 150px;
`

// export const PageTitle = styled.Text`
// font-size: 30px;
// text-align: center;
// font-weight: bold;
// color: ${brand};
// padding: 10px;
// `;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`

export const StyledFormArea = styled.View`
  width: 90%;
`

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 18px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`

export const StyledInputLabel = styled.Text`
  color: ${brand};
  font-size: 13px;
  text-align: left;
`

export const LeftIcon = styled.View`
  left: 15px;
  top: 34px;
  position: absolute;
  z-index: 1;
`

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 34px;
  position: absolute;
  z-index: 1;
`

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
`

export const ButtonText = styled.Text`
  color: ${secondary};
  font-size: 16px;
  font-weight: bold;
`

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${secondary};
`

export const Line = styled.View`
  height: 1px;
  marginbottom: 25px;
  width: 100%;
  background-color: ${tertiary};
  margin-vertical: 10px;
`

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`

export const ExtraText = styled.Text`
        justify-content: center;
        align-content: center;
        color: ${tertiary}
        font-size: 15px;
    `

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`

// End Login
