import { useContext } from "react";
import authContext from "../context/authContext/authContext";

function useAuth() {
    return useContext(authContext)
}

export default useAuth