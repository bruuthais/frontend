import api from "./api/api";
/**
 * Verifies the login and password and returns the logged user if sucessful.
 * @param {object} object containing the user's login and password
 * @returns {Promise}
 */
export const doLogin = async ({login, password}) => {
    return await api.post('/auth', {
        login,
        password
    });
};