import { userConstants } from '../constants'

export const userActions = {
    register,
    login
};

function register(user) {
    return { type: userConstants.REGISTER_USER, user }
}
function login(user,loginStatus) {
    return { type: userConstants.LOGIN_USER, ...user,loginStatus }
}


