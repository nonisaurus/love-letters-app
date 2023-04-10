import apiUrl from "../../apiConfig";
import axios from "axios";

// USERS
// get all users
export const getAllUsers = () => {
    return axios.get(`${apiUrl}/api/users`)
}

// get user by username
export const getUserByUsername = (username) => {
    return axios.get(`${apiUrl}/api/users/${username}`)
}

// get users by id
export const getUserById= (id) => {
    return axios.get(`${apiUrl}/api/user/${id}`)
}

// create user
export const createUser = () => {
    return axios.post(`${apiUrl}/api/user`)
}

// update user by id
export const updateUserById = (id) => {
    return axios.patch(`${apiUrl}/api/users/${id}`)
}

// delete user by id
export const deleteUserById = (id) => {
    return axios.delete(`${apiUrl}/api/user/${id}`)
}

// CARDS
// get all cards
export const getAllCards = () => {
    return axios.get(`${apiUrl}/api/cards`)
}

// get a card by id
export const getCardById = (id) => {
    return axios.get(`${apiUrl}/api/cards/${id}`)
}

// create cards
export const createCard = () => {
    return axios.post(`${apiUrl}/api/cards`)
}

// delete card by id
export const deleteCardById= (id) => {
    return axios.get(`${apiUrl}/api/cards/${id}`)
}


// MESSAGES
// get all messages
export const getAllMessages = () => {
    return axios.get(`${apiUrl}/api/messages`)
}

// delete message by ID
export const deleteMessageById = (id) => {
    return axios.delete(`${apiUrl}/api/messages/${id}`)
}

// update message
export const updateMesageById = (id) => {
    return axios.get(`${apiUrl}/api/messages/${id}`)
}

// create message
export const createMessage = () => {
    return axios.post(`${apiUrl}/api/message`)
}


