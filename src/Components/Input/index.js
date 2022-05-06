import { View } from 'react-native'
import React from 'react'

// Styled-Component
import { Container, Box, TextInput, Text, MaskTextInput } from './styles'


const Input = ({ icon, mask, label, keybordType = 'default', editable, onChange, placeholder, value = '', backgroundColor = 'white', styleContainer, styleLabel }) => {
  return (
    <>
      {label && <Text style={styleLabel} size={16}>{label}</Text>}
      <Container style={styleContainer}>
        <Box>
          {icon && icon}
          {mask ?
            <MaskTextInput
              type={mask.type}
              options={mask.options}
              value={value}
              placeholder={placeholder}
              onChangeText={value => onChange(value)}
              editable={editable}
            />
            :
            <TextInput
              value={value}
              keybordType={keybordType}
              backgroundColor={backgroundColor}
              onChangeText={value => onChange(value)}
              placeholder={placeholder}
              hasIcon={icon ? true : false}
              editable={editable}
            />}
        </Box>
      </Container>
    </>


  )
}

export default Input