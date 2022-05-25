import { View, TouchableOpacity, StatusBar, Pressable, Keyboard } from 'react-native'
import React from 'react'
import { Container, Text } from './styles'

// API
import { createExpense } from '../../Api/Expenses'

// Components
import Screen from '../../Components/Screen'
import Button from '../../Components/Button'
import Input from '../../Components/Input'



// Moment
import moment from 'moment'

// Styles
import colors from '../../Styles/colors'

// ALERTS
import { showMessage, hideMessage } from "react-native-flash-message";



const CreateScreen = ({ route, navigation }) => {

    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState('');
    const [value, setValue] = React.useState('');


    const user = route.params.user
    const refresh = route.params.refresh

    const formatarMoeda = (value) => {

        var valor = value + '';

        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }


        return valor
    }

    const newExpense = async () => {

        const formatFloat = e
        .replace("R$ ", "")
        .replace(".", "")
        .replace(",", ".");
        // asdsd


        const formatFloat2 = e
        .replace("R$ ", "")
        .replace(".", "")
        .replace(",", ".");
      
        Keyboard.dismiss


        const newValue = formatarMoeda(value).replace(',', '.')

        console.log(newValue)


        const data = {
            "date": moment(date).format('YYYY-DD-MM'),
            "item": description,
            "value": parseFloat(newValue),
            "additionalInfo": {}
        }

        console.log(user.token)


        const response = await createExpense(data, user.token)

        if (response) {
            showMessage({
                message: "Sucesso",
                description: "A sua despesa foi cadastrada!",
                type: "success",
                statusBarHeight: StatusBar.currentHeight,
                floating: true,
            });
            navigation.navigate('Home', { refresh: !refresh })
        } else {
            showMessage({
                message: "Falha",
                description: "Não foi possível recupear a despesa. Verifique sua conexão!",
                type: "danger",
                statusBarHeight: StatusBar.currentHeight,
                floating: true,
            });
        }

    }

    const submit = () => {

        if (!description.length || !date.length || !value.length) {
            showMessage({
                message: "Falha",
                description: "Preencha todos os campos da tela!",
                type: "danger",
                statusBarHeight: StatusBar.currentHeight,
                floating: true,
            });
        } else {
            Keyboard.dismiss
            newExpense()
        }

    }



    return (
        <Screen>
            <Pressable style={{ height: "100%" }} onPress={Keyboard.dismiss}>


                <Text size={20} bold >{'Adicionar Despesa'}</Text>

                <Input
                    styleContainer={{ width: '90%', alignSelf: 'center', borderWidth: 1, borderColor: colors.greenStrong, marginBottom: 15 }}
                    styleLabel={{ width: '90%', fontWeight: 'bold' }}
                    placeholder="Descrição..."
                    label='Descrição'
                    value={description}
                    onChange={value => setDescription(value)}
                />


                <Input
                    mask={{
                        type: "datetime",
                        options: {
                            format: "DD/MM/YYYY"
                        }
                    }}
                    styleContainer={{ width: '90%', alignSelf: 'center', borderWidth: 1, borderColor: colors.greenStrong, marginBottom: 15 }}
                    styleLabel={{ width: '90%', fontWeight: 'bold' }}
                    placeholder="Data..."
                    label='Data'
                    value={date}
                    onChange={value => setDate(value)}
                />

                <Input
                    mask={{
                        type: "money",
                        options: {
                            precision: 2,
                            separator: ',',
                            delimiter: '.',
                            unit: 'R$',
                            suffixUnit: ''
                        }
                    }}
                    styleContainer={{ width: '90%', alignSelf: 'center', borderWidth: 1, borderColor: colors.greenStrong, marginBottom: 15 }}
                    styleLabel={{ width: '90%', fontWeight: 'bold' }}
                    placeholder="R$ ..."
                    label='Valor'
                    value={value}
                    onChange={value => setValue(value)}
                />


                <Button
                    styleContainer={{ marginTop: 8, alignSelf: 'center', backgroundColor: colors.greenStrong }}
                    label="Salvar"
                    onPress={() => submit()}
                />

            </Pressable>
        </Screen>
    )
}

export default CreateScreen