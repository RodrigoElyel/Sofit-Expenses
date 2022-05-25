import { View, Image, Platform } from 'react-native'
import React from 'react'

// Moment
import moment from 'moment'

// Icons
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Styled-Component
import { Container, Text, Center, Left, Right } from './styles'


const Card = ({ expense, onPress, onPressRemove, styleContainer }) => {

  

  if(Platform.OS === 'android') { // only android needs polyfill
    require('intl'); // import intl object
    require('intl/locale-data/jsonp/pt-BR'); // load the required locale details
  }

  console.log(expense?.value)


  return (
    <Container
      style={styleContainer}
      onPress={onPress}
    >

      <Left>
        <MaterialIcons name="attach-money" size={50} color="black" />
      </Left>

      <Center>
        <Text size={14} bold>Descrição:</Text>
        <Text size={14} marginBottom={10}>{expense?.item}</Text>



        <Text size={14} bold>Data da despesa:</Text>
        <Text size={14} marginBottom={10}>
          {moment(expense?.date).add(1, 'days').format('DD/MM/YYYY')}
        </Text>

        <Text size={14} bold>Valor:</Text>
        <Text size={14} marginBottom={10} >{expense?.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
      </Center>

      <Right onPress={onPressRemove}>
        <FontAwesome name="trash" size={30} color="black" />
      </Right>

    </Container>
  )
}

export default Card