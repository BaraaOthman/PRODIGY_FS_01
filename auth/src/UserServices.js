
import http from "./http-common";

const register = (formData) => {
    return http.post(`/users/register`, formData);
}


const login = (formData) => {
    return http.post(`/users/login`, formData);
}

const UserService = {
    login,
    register,

}

export default UserService;
