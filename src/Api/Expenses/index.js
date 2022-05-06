import axios from 'axios';
import { baseURL }  from '../../Constants'

export const allExpenses = async (page, perPage, token) => {

    try {
        const resp = await axios({
            method: 'GET',
            url: `${baseURL}/expenses`,
            params: {page: page, perPage: perPage},
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            json: true,
        })

        return resp.data;
    } catch (e) {
        console.log(JSON.stringify(e, null, 2));
    }
}

export const createExpense = async (data, token) => {

    try {
        const resp = await axios({
            method: 'POST',
            url: `${baseURL}/expenses`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: data,
            json: true,
        })

        return resp.data;
    } catch (e) {
        console.log(JSON.stringify(e, null, 2));
    }
}

export const expensesByID = async (_id, token) => {

    try {
        const resp = await axios({
            method: 'GET',
            url: `${baseURL}/expenses/${_id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            json: true,
        })

        return resp.data;
    } catch (e) {
        console.log(JSON.stringify(e, null, 2));
    }
}

export const deleteExpenseByID = async (_id, token) => {

    try {
        const resp = await axios({
            method: 'DELETE',
            url: `${baseURL}/expenses/${_id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            json: true,
        })

        return resp.data;
    } catch (e) {
        console.log(JSON.stringify(e, null, 2));
    }
}

export const editExpenseByID = async (_id, data, token) => {

    try {
        const resp = await axios({
            method: 'PUT',
            url: `${baseURL}/expenses/${_id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: data,
            json: true,
        })

        return resp.data;
    } catch (e) {
        console.log(JSON.stringify(e, null, 2));
    }
}