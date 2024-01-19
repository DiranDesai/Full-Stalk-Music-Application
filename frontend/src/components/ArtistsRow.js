import React, { useRef } from "react";
import useScrollValue from "../hooks/useScrollValue";

function ArtistsRow({ heading }) {
  const cardContainerRef = useRef(null)
  const {scrollValue, handlePrev, handleNext} = useScrollValue(cardContainerRef)

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
          <article>
            <div className="artist">
              <img src="images/bobby_east.jpg" alt="" />
              <div className="content">
                <h4>Bobby East</h4>
                <p>300K Followers</p>
              </div>
            </div>
          </article>
          <article>
            <div className="artist">
              <img src="images/bob.jpg" alt="" />
              <div className="content">
                <h4>Bob Marley</h4>
                <p>900K Followers</p>
              </div>
            </div>
          </article>
          <article>
            <div className="artist">
              <img src="images/img9.jpg" alt="" />
              <div className="content">
                <h4>Macky 2</h4>
                <p>520K Followers</p>
              </div>
            </div>
          </article>
          <article>
            <div className="artist">
              <img src="images/yo.jpg" alt="" />
              <div className="content">
                <h4>Yoh Maps</h4>
                <p>680K Followers</p>
              </div>
            </div>
          </article>
          <article>
            <div className="artist">
              <img src="images/tay.jpg" alt="" />
              <div className="content">
                <h4>Tay Grin</h4>
                <p>830K Followers</p>
              </div>
            </div>
          </article>
          <article>
            <div className="artist">
              <img src="images/dizmo.jpg" alt="" />
              <div className="content">
                <h4>Dizmo</h4>
                <p>450K Followers</p>
              </div>
            </div>
          </article>
          <article>
            <div className="artist">
              <img src="images/bobby_east.jpg" alt="" />
              <div className="content">
                <h4>Bobby East</h4>
                <p>450K Followers</p>
              </div>
            </div>
          </article>
          <article>
            <div className="artist">
              <img src="images/yo.jpg" alt="" />
              <div className="content">
                <h4>Yoh Maps</h4>
                <p>680K Followers</p>
              </div>
            </div>
          </article>
          <article>
            <div className="artist">
              <img src="images/tay.jpg" alt="" />
              <div className="content">
                <h4>Tay Grin</h4>
                <p>830K Followers</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default ArtistsRow;
