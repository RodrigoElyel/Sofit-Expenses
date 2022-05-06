import { View } from 'react-native'
import React from 'react'

// Styled-Component
import { Container, Text } from './styles'

const Button = ({ label, onPress, disabled, styleContainer }) => {
  return (
    <Container
      style={[{ ...styleContainer }, { opacity: disabled ? 0.5 : 1 }]}
      onPress={onPress}
      disabled={disabled}
    >

      <Text>{label}</Text>

    </Container>
  )
}

export default Button