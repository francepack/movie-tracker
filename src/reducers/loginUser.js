export const loginUser = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return action.userInfo;
        default:
            return state;
    }
}