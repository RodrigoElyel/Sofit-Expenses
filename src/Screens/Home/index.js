import { Alert, ScrollView, FlatList, StatusBar, View } from 'react-native'
import React from 'react'
import { Text } from './styles'

// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

// API
import { allExpenses, deleteExpenseByID } from '../../Api/Expenses';

// ALERTS
import { showMessage, hideMessage } from "react-native-flash-message";

// Components
import Screen from '../../Components/Screen';
import Card from '../../Components/Card';
import Input from '../../Components/Input';

// RN paper
import { FAB } from 'react-native-paper';

// Colors
import colors from '../../Styles/colors'

const HomeScreen = ({ navigation, route }) => {

    const [user, setUser] = React.useState(null)
    const [expenses, setExpenses] = React.useState([])
    const [search, setSearch] = React.useState('')

    const refresh = route.params.refresh

    const getUser = async () => {

        const responseUser = await AsyncStorage.getItem('@storage:user')

        if (responseUser) {
            setUser(JSON.parse(responseUser))
            getAllExpenses(JSON.parse(responseUser).token)
        } else {
            showMessage({
                message: "Falha",
                description: "Não foi possível recupear o user. Verifique sua conexão!",
                type: "danger",
                statusBarHeight: StatusBar.currentHeight,
                floating: true,
            });
        }



    }

    const getAllExpenses = async (token) => {


        const response = await allExpenses(1, 20, token)

        if (response) {
            setExpenses(response)
        } else {
            showMessage({
                message: "Falha",
                description: "Não foi possível recupear as despesas. Verifique sua conexão!",
                type: "danger",
                statusBarHeight: StatusBar.currentHeight,
                floating: true,
            });
        }

    }


    const deleteExpense = async (item) => {

        console.log(item._id, user.token)

        const response = await deleteExpenseByID(item._id, user.token)

        if (response) {
            showMessage({
                message: "Sucesso",
                description: "Despesa removida!",
                type: "success",
                statusBarHeight: StatusBar.currentHeight,
                floating: true,
            });

            getAllExpenses(user.token)
        } else {
            showMessage({
                message: "Falha",
                description: "Não foi possível recupear as despesas. Verifique sua conexão!",
                type: "danger",
                statusBarHeight: StatusBar.currentHeight,
                floating: true,
            });
        }

    }

    const removeExpense = (item) => {
        Alert.alert(
            'Atenção!',
            'Você tem certeza que deseja remover essa despesa?',
            [
                {
                    text: "Cancelar",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "Sim", onPress: () => deleteExpense(item) }
            ]
        )
    }

    const renderItem = ({ item }) => (
        <Card
            key={item._id}
            expense={item}
            styleContainer={{ width: "90%", alignSelf: "center" }}
            onPress={() => navigation.navigate('Details', { expense: item, user: user, refresh: refresh })}
            onPressRemove={() => removeExpense(item)}
        />
    );

    const renderEmpty = ({ item }) => (
        <View style={{}}>
            <Text size={18} bold >{"A sua lista está vazia!\n Cria novas despesas."}</Text>
        </View>

    );

    const filterExpenses = search !== '' ? expenses.filter(expense => expense.item.includes(search)) : expenses


    React.useEffect(() => {
        getUser()
    }, [refresh])

    return (
        <>
            <Screen style={{ backgroundColor: colors.lightgray }}>

                <Text size={20} bold >Minhas Despesas</Text>

                <Input
                    styleContainer={{ width: '70%', alignSelf: 'center', borderWidth: 1, borderColor: colors.greenStrong, marginBottom: 15 }}
                    placeholder="Buscar por descrição..."
                    value={search}
                    onChange={value => setSearch(value)}
                />

                <FlatList
                    data={filterExpenses}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                    ListEmptyComponent={renderEmpty}
                    style={{ height: "80%"}}
                />



            </Screen>
            <FAB
                style={{
                    position: 'absolute',
                    margin: 16,
                    right: 0,
                    bottom: 10,
                    backgroundColor: colors.greenStrong
                }}
                big
                icon="plus"
                color={colors.black}
                onPress={() => navigation.navigate('Create', { user: user, refresh: refresh })}
            />
        </>

    )
}

export default HomeScreen