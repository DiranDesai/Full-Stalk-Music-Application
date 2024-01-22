import { useReducer } from "react"
import songsContext from "./songsContext"
import songsReducer from "./songsReducer"

const SongsProvider = ({children}) => {
    const initialState = {
        songs: [{id: "song1"}],
        artists: [],
        testing: false
    }

    const [state, dispatch] = useReducer(songsReducer, initialState)

    return (
        <songsContext.Provider value={{...state, dispatch}}>
            {children}
        </songsContext.Provider>
    )
}

export default SongsProvider