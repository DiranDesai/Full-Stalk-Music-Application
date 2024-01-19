import { useReducer } from "react"
import authContext from "./authContext"
import authReducer from "./authReducer"

const AuthProvider = ({children}) => {
    const initialState = {
        token: 'gedgvdfgsv'
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    return (
        <authContext.Provider value={{...state}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider