import axios from 'axios';
import { baseURL }  from '../../Constants'


export const login = async (email) => {

    try {
        const resp = await axios({
            method: 'GET',
            url: `${baseURL}/start/${email}`,
            headers: {
                'Content-Type': 'application/json',
            },
            json: true,
        })

        return resp.data;
    } catch (e) {
        console.log(JSON.stringify(e, null, 2));
    }
}