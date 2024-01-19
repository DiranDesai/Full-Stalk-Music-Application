const authReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return {...state, token: 123}
            break;
        default:
            return state;
    }
}

export default authReducer