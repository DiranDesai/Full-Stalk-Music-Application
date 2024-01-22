import { useReducer } from "react"
import notifyContext from "./notifyContext"
import notifyReducer from "./notifyReducer"

const NotifyProvider = ({children}) => {
    const initialState = {
        loading: false,
        success: null,
        error: null,
        message: null
    }

    const [state, dispatch] = useReducer(notifyReducer, initialState)

    return (
        <notifyContext.Provider value={{...state, dispatch}}>
            {children}
        </notifyContext.Provider>
    )
}

export default NotifyProvider