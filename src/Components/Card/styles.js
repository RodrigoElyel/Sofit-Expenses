import styled from "styled-components/native";
import colors from '../../Styles/colors'

export const Container = styled.TouchableOpacity`
    min-height: 130px;
    min-width: 250px;
    padding: 12px;
    margin: 10px 0px;
    align-items: center;
    background-color: ${() => colors.lightgray};;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${() => colors.greenStrong};
    flex-direction: row;

`

export const Left = styled.View`
    width: 30%;
    justify-content: center;
    align-items: center;
`

export const Right = styled.TouchableOpacity`
    width: 20%;
    justify-content: center;
    align-items: center;
`

export const Center = styled.View`
    flex-direction: column;
    width: 50%;
    justify-content: space-around;
    align-items: flex-start;
`

export const Text = styled.Text`
    padding-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}px` : '0px')};
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
    font-size: ${({ size }) => size ? `${size}px` : '18px'};
`