import React, { useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom"
import useScrollValue from "../hooks/useScrollValue";
import useSongs from "../hooks/useSongs";
import { truncate } from "../utils/main";

const API_KEY = "2b18da63335bb69e417750d5a0cd80d2";
const TMDB_URL = "https://api.themoviedb.org/3";
const TMDB_URL_IMG = "https://image.tmdb.org/t/p/w500";

const MOVIES_URL_PATHS = {
  trending: "/trending/movie/day?api_key=",
};


function NewRealeses({ heading }) {
  const [movies, setMovies] = useState([]);
  const cardContainerRef = useRef(null);
  const { scrollValue, handlePrev, handleNext } =
    useScrollValue(cardContainerRef);
  const data = useSongs();

  useEffect(() => {
    async function fetchMovies(url) {
      const response = await fetch(TMDB_URL + url + API_KEY);
      const data = await response.json();

      setMovies(data.results);
    }

    fetchMovies(MOVIES_URL_PATHS.trending);
  }, []);

  return (
    <div className="new-realeses">
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
          {movies?.map((movie) => {
            return (
              <article>
                <div className="article-cover">
                  <img src={TMDB_URL_IMG + movie.poster_path} alt="" />
                  <span className="fav-icon">
                    <i class="bi bi-heart"></i>
                  </span>
                  <span className="play-icon">
                    <i class="bi bi-play"></i>
                  </span>
                </div>
                <div className="article-body">
                  <Link to="/songs/1">
                  <h4>
                    <a href="#">{truncate(movie.title)}</a>
                  </h4></Link>
                  <p>
                    <a href="#">Shreya Ghoshal</a>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NewRealeses;
