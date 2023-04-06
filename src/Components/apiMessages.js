import apiUrl from "../apiConfig";
import axios from "axios";

// Get all messages
export const getAllMessages = () => {
    return axios.get(`${apiUrl}/api/messages`);
}

