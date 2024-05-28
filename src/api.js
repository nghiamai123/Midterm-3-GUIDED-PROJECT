import axios from "axios";

export const searchUsers = async (text) => {
    try {
        const response = await axios.get(
            `https://api.github.com/search/users?q=${text} `
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const getUser = async (name) => {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${name}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
};

