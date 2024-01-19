const songsReducer = (state, action) => {
    switch (action.type) {
        case "testing":
            return {...state, testing: true}
            break;
        default:
            return state;
    }
}

export default songsReducer