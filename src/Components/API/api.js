import apiUrl from "../../apiConfig";
import axios from "axios";

// Get all messages
export const getAllMessages = () => {
    return axios.get(`${apiUrl}/api/messages`);
}

// Delete message by ID
export const deleteMessageById = (id) => {
    return axios.delete(`${apiUrl}/api/${id}`)
}
