import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { LOADING } from "../context/types";
import useNotify from "../hooks/useNotify";


function ArtistSinglePage() {
  const [artist, setArtist] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const {dispatch, loading, success, message} = useNotify();
  const locationPath = window.location.pathname.split("/");
  const artistId = locationPath[locationPath.length - 1];

  useEffect(() => {
    async function getArtist() {
        dispatch({type: LOADING, payload: true});
      const accessToken = localStorage.getItem("spotifyToken");
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();
      setArtist(data)
      dispatch({type: LOADING, payload: false});
    }

    async function getTopTracks() {
        const accessToken = localStorage.getItem("spotifyToken");
        const response = await fetch(
          `https://api.spotify.com/v1/artists/${artistId}/top-tracks`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
  
        const data = await response.json();
        console.log(data);
        setTopTracks(data)
    }

    getArtist();
    getTopTracks();
  }, []);

  return (
    <>
       {loading && <Loader />}
      {artist && (
        <div className="container-fluid single-page-song">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div>
                <img
                  src={artist.images[0].url}
                  className="song-cover-img"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-9">
              <div>
                <h3>{artist.name}</h3>
                <p>by Mithoon Zukerton | South Africa | 200 followers</p>
                <p>{artist.genres.map(genre => genre)}</p>
                <div className="d-flex gap-4">
                  <button className="btn-2 download-btn">
                    Follow
                  </button>
                  <button className="btn-1">
                    <i className="bi bi-heart"></i>
                  </button>
                  <button className="btn-1">
                    <i className="bi bi-three-dots"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ArtistSinglePage;
