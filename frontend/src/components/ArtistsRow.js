import React, { useEffect, useRef } from "react";
import { ARTIST_FETCHING } from "../context/types";
import useScrollValue from "../hooks/useScrollValue";
import useSongs from "../hooks/useSongs";
import Artist from "./Artist";

function ArtistsRow({ heading }) {
  const {artists, dispatch} = useSongs();
  const cardContainerRef = useRef(null)
  const {scrollValue, handlePrev, handleNext} = useScrollValue(cardContainerRef)

  useEffect(() => {
    async function getArtists() {
      const artists = ["6ctMiUYEAd4cy0CaH355Hk", "5odhOPSmoW63rQQ40qPKp2", "2LPkXn6qkjU2w6djSluOko", "3tVQdUvClmAT7URs9V3rsp", "19ym5zp3d6AwpdBAcXsLIG", "5f24U3gtxTUPIRT2HujkHm", "1pcKqVZ7T90mJ2rKo9XWYV", "0Y3agQaa6g2r0YmHPOO9rh", "3LZZPxNDGDFVSIPqf4JuEf", "22Bl1QCNEZvpqVwRPYscE4"]
      const accessToken = localStorage.getItem("spotifyToken");
      const response = await fetch(`https://api.spotify.com/v1/artists?ids=${artists.join(",")}`, {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        }
      });

      const data = await response.json();
      dispatch({type: ARTIST_FETCHING, payload: data.artists})
    }

    getArtists()
  }, [])

  return (
    <div className="artist-row-container">
      <div className="header-wrapper d-flex justify-content-between align-items-center">
        <h2 className="heading">{heading}</h2>
        <div className="d-flex justify-content-between align-items-center gap-3 controls-button">
          <button onClick={handlePrev}>
            <i className="bi bi-arrow-left-square"></i>
          </button>
          <button onClick={handleNext}>
            <i className="bi bi-arrow-right-square"></i>
          </button>
        </div>
      </div>
      <div className="card-row-wrapper">
        <div className="card-row-container mt-4" ref={cardContainerRef}>
          {artists?.map(artist => (
            <Artist artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtistsRow;
