import { View, TouchableOpacity, StatusBar, Pressable, Keyboard } from 'react-native'
import React from 'react'
import { Container, Text } from './styles'

// API
import { expensesByID, editExpenseByID } from '../../Api/Expenses'

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



const DetailsScreen = ({ route, navigation }) => {

    const [description, setDescription] = React.useState(route.params.expense.item);
    const [date, setDate] = React.useState(route.params.expense.date);
    const [value, setValue] = React.useState(route.params.expense.value);
    const [edit, setEdit] = React.useState(false);


    const expense = route.params.expense
    const user = route.params.user
    const refresh = route.params.refresh

    // Em casos que a busca geral não traz todas as informações e é preciso usar uma buscar por ID como na função getExpense
    // Como as informações que são resgatas e passadas por PROPS são as mesma, não é necessário!
    const getExpense = async () => {

        const response = await expensesByID(expense._id, user.token)

        if (response) {
            console.log(response, 'expense')
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

    const formatarMoeda = (value) => {

        let valor = value + '';
        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }

        return valor
    }

    const submitEdit = async () => {

        if (!description.length || !date.length || !value.length) {
            showMessage({
                message: "Falha",
                description: "Preencha todos os campos da tela!",
                type: "danger",
                statusBarHeight: StatusBar.currentHeight,
                floating: true,
            });
            return
        }


        Keyboard.dismiss

        const newValue = formatarMoeda(value).replace(',', '.')

        console.log(newValue)


        const data = {
            "date": moment(date).format('YYYY-MM-DD'),
            "item": description,
            "value": parseFloat(newValue),
            "additionalInfo": {}
        }

        console.log(data)


        const response = await editExpenseByID(expense._id, data, user.token)

        if (response) {
            showMessage({
                message: "Sucesso",
                description: "A alteração foi realizada!",
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

    const changeEdit = () => {
        setEdit(!edit)
        setDescription('')
        setDate('')
        setValue('')
    }

    const undoEdit = () => {
        setEdit(!edit)
        setDescription(expense.item)
        setDate(expense.date)
        setValue(expense.value)
    }


    React.useEffect(() => {
        // getExpense()
    }, [])


    return (
        <Screen>
            <Pressable style={{ height: "100%" }} onPress={Keyboard.dismiss}>


                <Text size={20} bold >{edit ? 'Editar Despesa' : 'Detalhes Da Despesa'}</Text>

                <Input
                    styleContainer={{ width: '90%', alignSelf: 'center', borderWidth: 1, borderColor: colors.greenStrong, marginBottom: 15 }}
                    styleLabel={{ width: '90%', fontWeight: 'bold' }}
                    placeholder="Descrição..."
                    label='Descrição'
                    value={description}
                    onChange={value => setDescription(value)}
                    editable={edit}
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
                    value={edit ? date : moment(date).add(1, 'days').format('DD/MM/YYYY')}
                    onChange={value => setDate(value)}
                    editable={edit}
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
                    editable={edit}
                />

                {edit === false ?
                    <Button
                        styleContainer={{ marginTop: 8, alignSelf: 'center', backgroundColor: colors.gold }}
                        label="Editar"
                        onPress={() => changeEdit()}
                    />
                    :
                    <>
                        <Button
                            styleContainer={{ marginTop: 8, alignSelf: 'center', backgroundColor: colors.greenStrong }}
                            label="Salvar"
                            onPress={() => submitEdit()}
                        /><Button
                            styleContainer={{ marginTop: 8, alignSelf: 'center', backgroundColor: colors.gold }}
                            label="Defazer"
                            onPress={() => undoEdit()}
                        />
                    </>

                }
            </Pressable>
        </Screen>
    )
}

export default DetailsScreen