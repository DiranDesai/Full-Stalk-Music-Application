import { useContext } from "react"
import songsContext from "../context/songsContext/songsContext"

const useSongs = () => {
    return useContext(songsContext)
}

export default useSongs