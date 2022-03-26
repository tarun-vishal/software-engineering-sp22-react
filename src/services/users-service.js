import axios from "axios";
// const BASE_URL = "http://localhost:4000";
const BASE_URL = "https://software-engineering-sp22-a2.herokuapp.com";


const LOGIN_API = `${BASE_URL}/login`;
const USERS_API = `${BASE_URL}/users`;



export const findAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
}

export const findUserById = (uid) =>
    axios.get(`${USERS_API}/${uid}`)
    .then(response => response.data);

export const deleteUsersByUsername = (username) =>
    axios.delete(`${USERS_API}/username/${username}/delete`)
    .then(response => response.data);

export const createUser = async (user) => {
    try{
        const response = await axios.post(`${USERS_API}`, user);
        const data = response.data;
        return data;
    } catch(err){
        console.log(JSON.stringify(err))
    }
}

export const deleteUser = (uid) =>
    axios.delete(`${USERS_API}/${uid}`)
    .then(response => response.data);



export const findUserByCredentials = (credentials) =>
    axios.post(`${LOGIN_API}`, credentials)
    .then(response => response.data);

const service = {
    findAllUsers
}

export default service;
