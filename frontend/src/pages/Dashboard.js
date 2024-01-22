import React from 'react'

const BACKEND_URL = "https://full-stalk-music-application-backend.onrender.com"

function Dashboard() {
    async function getSpotifyAccessToken() {
        const response = await fetch(`${BACKEND_URL}/getSpotifyAccessToken`)
        const data = await response.json()
        localStorage.setItem("spotifyToken", data.access_token)
      }


  return (
    <div className="container-fluid p-5">
        <button className="btn btn-danger" onClick={getSpotifyAccessToken}>Get Access Token</button>
    </div>
  )
}

export default Dashboard