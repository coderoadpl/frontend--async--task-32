import { makeRequest } from './makeRequest'

const GET_USER_DATA_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBLgVFUKq8psWokJWXVKR6Q-LhISj308q4'

export const getUserData = (token) => {
    return makeRequest(
        GET_USER_DATA_URL,
        {
            method: 'POST',
            body: JSON.stringify({
                idToken: token
            })
        }
    ).then((data) => data && data.users && data.users[0])
}

export default getUserData
