import { useContext } from "react"
import notifyContext from "../context/notifyContext/notifyContext";

function useNotify() {
    return useContext(notifyContext);
}

export default useNotify