import styled from "styled-components/native";

export const TextInput = styled.TextInput`
    color: #000;
    width: ${({hasIcon}) => (hasIcon ? "90%" : "100%")};
    font-size: 16px;
    padding: 12px;
    border-radius: 8px;
`

export const Container = styled.TouchableOpacity`
    padding: 12px;
    align-items: center;
    background-color: #fff;
    border-radius: 6px;
    min-width: 250px;
`

export const Text = styled.Text`
    font-size: 18px;
`