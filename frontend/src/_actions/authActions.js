import * as types from '../_constants_redux';

export const login = (token, email, username) => ({

    type: types.LOGIN,

    token, 
    email, 
    username,
})

export const logout = () => ({

    type: types.LOGOUT,

})