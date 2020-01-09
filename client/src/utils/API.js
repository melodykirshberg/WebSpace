import axios from "axios";

export default {
    getUsers: function () {
        return axios.get("/api/users");
    },
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    getUserByEmail: function (email) {
        return axios.get("/api/users/email/" + email)
    },
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    updateUser: function (userData) {
        return axios.put("/api/user", userData);
    }
};
