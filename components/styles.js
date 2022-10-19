import styled from 'styled-components';
import { View, Text, Image } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// colors
export const colors = {
    primary: '#000000',
    secondary: '#ffffff',
    tertiary: '#666666',
    brand: '#de8d1a',
};

const { primary, secondary, tertiary, brand } = colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${Constants.statusBarHeight + 10}px;
    background-color: ${primary};
    align-items: center;
    justify-content: center;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    `;

    export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
    `;

    export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
    `;