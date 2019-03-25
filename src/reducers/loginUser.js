export const loginUser = (state = {}, action) => {
    const { userInfo } = action;
    switch (action.type) {
        case 'LOGIN_USER':
            return userInfo;
        case 'LOGOUT_USER':
            return state={};
        default:
            return state;
    }
}