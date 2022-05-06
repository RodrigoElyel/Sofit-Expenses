import { View, StatusBar, Image, Pressable, Keyboard, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Text, Header, Body, MyImage } from './styles'

// Components
import Input from '../../Components/Input'
import Screen from '../../Components/Screen'
import Button from '../../Components/Button'

// API
import { login } from '../../Api/Auth'


// ALERTS
import { showMessage, hideMessage } from "react-native-flash-message";

// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';



import colors from '../../Styles/colors'



const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = React.useState('')
  const [animation, setAnimation] = React.useState(false)

  console.log(email)

  const autheticate = async () => {

    const response = await login(email)

    if (response) {
      showMessage({
        message: "Sucesso",
        description: "Login efetuado!",
        type: "success",
        statusBarHeight: StatusBar.currentHeight,
        floating: true,
      });

      await AsyncStorage.setItem('@storage:user', JSON.stringify(response))

      setAnimation(true)

      setTimeout(() => {
        navigation.navigate('Home', { refresh: true })
      }, 1000)



    } else {
      showMessage({
        message: "Falha",
        description: "Não foi possível realizar o login. Verifique sua conexão!",
        type: "danger",
        statusBarHeight: StatusBar.currentHeight,
        floating: true,
      });
    }

  }

  const submit = () => {


    if (!email.length) {
      showMessage({
        message: "Falha",
        description: "Insira um email válido!",
        type: "danger",
        statusBarHeight: StatusBar.currentHeight,
        floating: true,
      });
    } else {
      autheticate()
    }

  }

  return (
    <Screen style={{ backgroundColor: colors.greenStrong }}>
      <Pressable style={{ height: "100%" }} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>

          <Header>

            <Text size={30} bold >My Expenses</Text>
            <MyImage
              source={require('../../Assets/Images/loginIcon.png')}
              resizeMode="contain"
              animation={animation ? 'rotate' : 'pulse'}
              delay={animation ? 1000 : 100}
              iterationCount={animation ? 1 : 'infinite'}
            />

          </Header>


          <Body>
            <Input
              styleContainer={{ marginTop: 8, width: '90%', alignSelf: 'center' }}
              styleLabel={{ width: '90%' }}
              placeholder="Digite seu e-mail"
              label={'E-mail'}
              value={email}
              onChange={value => setEmail(value)}
              keybordType="email-address"
            />
            <Button
              styleContainer={{ marginTop: 8, width: '90%', alignSelf: 'center', backgroundColor: colors.green }}
              label="Entrar"
              onPress={() => submit()}
            />

          </Body>

        </KeyboardAvoidingView>
      </Pressable>
    </Screen>
  )
}

export default LoginScreen