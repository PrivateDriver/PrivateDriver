import styled from 'styled-components/native'
import Constants from 'expo-constants'
import { DefaultTheme } from 'react-native-paper'

export const PaperFormTheme = {
  ...DefaultTheme,
  roundness: 15,
  colors: {
    ...DefaultTheme.colors,
    primary: '#676767',
    secondary: '#ffffff',
    accent: '#00cc00',
    // You can also customize other color properties here
  },
}
// colors
export const Colors = {
  primary: '#000000',
  secondary: '#ffffff',
  tertiary: '#8e99a3',
  darkLight: '#2d3142',
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
  color: ${tertiary};
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
// Checkout Styles

export const StyledContainerCheckout = styled.View`
  flex: 1;
  padding: 10px;
  padding-top: 30px;
  background-color: white;
  align-items: left;
  justify-content: left;
`
export const SubTitleCheckout = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  color: ${darkLight};
`
export const StyledFormAreaCheckout = styled.View`
  width: 90%;
`
export const MileageDiv = styled.View`
  flex-direction: row;
  width: 90%;
  background-color: ${brand};
`

//// Flatlist tile styles

export const PageContainer = styled.View`
  background-color: ${tertiary};
  height: 100%;
`
export const TopContainer = styled.View`
  display: 'flex';
  flex-direction: 'column';
  align-items: 'top';
  justify-content: 'center';
  overflow: 'hidden';
`
export const BottomContainer = styled.View`
  resize-mode: 'cover';
  ${'' /* background-color: ${secondary}; */}
`
export const ListContainer = styled.View`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
  padding-bottom: 5px;
`
export const ListTitle = styled.Text`
  font-size: 20px;
`

export const ListSubtitle = styled.Text`
  font-size: 16px;
`
