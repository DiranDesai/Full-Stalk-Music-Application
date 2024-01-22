import { ARTIST_FETCHING } from "../types";

const songsReducer = (state, action) => {
    switch (action.type) {
        case ARTIST_FETCHING:
            return {...state, artists: action.payload}
            break;
        default:
            return state;
    }
}

export default songsReducer