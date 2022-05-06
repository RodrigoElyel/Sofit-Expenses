import styled from "styled-components/native";
import colors from '../../Styles/colors'

// TextMask
import { TextInputMask } from 'react-native-masked-text'

export const TextInput = styled.TextInput`
    color: ${() => colors.black};
    width: ${({hasIcon}) => (hasIcon ? "90%" : "100%")};
    font-size: 16px;
    padding: 12px;
    border-radius: 8px;
    background-color: ${() => colors.lightgray};
`

export const MaskTextInput = styled(TextInputMask)`
    color: ${() => colors.black};;
    width: ${({hasIcon}) => (hasIcon ? "90%" : "100%")};
    font-size: 16px;
    padding: 12px;
    border-radius: 8px;
    background-color: ${() => colors.lightgray};
`

export const Container = styled.View`
    border-radius: 8px;
    flex-direction: column;
`

export const Box = styled.View`
    height: 50px;
    flex-direction: row;
`

export const Text = styled.Text`
    margin-bottom: 8px;
    align-self: center;
    font-size: ${({size}) => size ? `${size}px` : '18px'};
`