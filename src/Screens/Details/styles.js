import styled from "styled-components/native";
import colors from '../../Styles/colors'
// TextMask
import { TextInputMask } from 'react-native-masked-text'

export const Container = styled.TouchableOpacity`
    width: 90%;
    min-height: 150px;
    min-width: 250px;
    padding: 12px;
    margin: 10px 0px;
    align-items: center;
    background-color: #fff;
    border-radius: 6px;
    border-width: 1px;
    border-color: ${() => colors.gray};
    flex-direction: column;
    justify-content: space-around;
    align-self: center;
`

export const TextInput= styled(TextInputMask)`
    height: 50px;
    border-radius: 8px;
    flex-direction: row;
    border-width: 1px;
    border-color: #ced4da;
`

export const Header = styled.View`
    padding: 2px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    background-color: ${() => colors.gray}
`

export const Body = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`

export const Text = styled.Text`
    margin: 20px 0px;
    align-self: center;
    color: ${() => colors.greenStrong};
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
    font-size: ${({size}) => size ? `${size}px` : '18px'};
`