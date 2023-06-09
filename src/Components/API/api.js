import apiUrl from "../../apiConfig";
import axios from "axios";

// AUTH
export const logInRoute = (username, password) => {
    return axios.post(`${apiUrl}/api/login`, { username, password })
        .then(response => {
            localStorage.setItem("jwt", response.data.token);
            return response.data
        });
}


export const logOutRoute = (id) => {
    return axios.patch(`${apiUrl}/api/logout/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
    });
}


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
    return axios.get(`${apiUrl}/api/user/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
    })
}

// create user
export const createUser = (username, password) => {
    return axios.post(`${apiUrl}/api/user`, { username, password })
        .then(response => {
            localStorage.setItem("jwt", response.data.token);
            return response.data
        });
}

// update user by id
export const updateUserById = (id, newUserObj) => {

    return axios.put(`${apiUrl}/api/users/${id}`, newUserObj, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
    })
}

// delete user by id
export const deleteUserById = (id) => {
    return axios.delete(`${apiUrl}/api/user/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
    })
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
    return axios.get(`${apiUrl}/api/messages`, 
    {headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`}
    })
}

// delete message by ID
export const deleteMessageById = (id) => {
    return axios.delete(`${apiUrl}/api/messages/${id}`, 
    {headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`}
    })
}

// update message
export const updateMesageById = (id, comment) => {
    const updateMessage = {id, userId: `${localStorage.getItem("user")}`, comment}
    return axios.put(`${apiUrl}/api/messages/${id}`, updateMessage,
    {headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`}
    })
}

// create message
export const createMessage = (messageData) => {
    const message = {userId: `${localStorage.getItem("user")}` , messageData}
    return axios.post(`${apiUrl}/api/message`, message,
    {headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`}
    })
}


