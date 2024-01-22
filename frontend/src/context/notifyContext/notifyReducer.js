import { LOADING, SUCCESS } from "../types";

const notifyReducer = (state, action) => {
    switch (action.type) {
        case LOADING:
            return {...state, loading: action.payload}
            break;
        case SUCCESS:
            const {success, msg} = action.payload
            return {...state, success: success, message: msg}
            break;
        default:
            return state;
    }
}

export default notifyReducer