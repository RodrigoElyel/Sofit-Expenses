import styled from "styled-components/native";
import colors from '../../Styles/colors'
import * as Animatable from 'react-native-animatable'

export const Text = styled.Text`
    margin-bottom: 8px;
    align-self: center;
    font-size: ${({ size }) => size ? `${size}px` : '18px'};
    color: ${({ color }) => color ? `${color}` : colors.black};
`

export const MyImage = styled(Animatable.Image)`
    height: 50%;
    align-self: center;
`

export const Header = styled.View`
    height: 40%;
    justify-content: space-around;
`

export const Body = styled.View`
    height: 60%;
    justify-content: center;
`