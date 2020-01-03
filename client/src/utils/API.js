// import axios from "axios";
// export default {
//     // Gets all users
//     getUsers: function () {
//         return axios.get("https://randomuser.me/api/?results=200&nat=us");
//     }
// };
import axios from "axios";

export default {
    getUsers: function () {
        return axios.get("/api/users");
    },

    saveUser: function (userData) {
        return axios.post("/api/users", userData);;
    }


};
