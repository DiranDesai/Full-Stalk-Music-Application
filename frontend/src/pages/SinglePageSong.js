import React from 'react'
import NewRealeses from '../components/NewRealeses'

function SinglePageSong() {
  return (
    <div className="container-fluid single-page-song">
        <div className="row align-items-center">
            <div className="col-md-3">
                <div>
                    <img src="https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg" className="song-cover-img" alt="" />
                </div>
            </div>
            <div className="col-md-9">
                <div>
                    <h3>Salaam Venky</h3>
                    <p>by Mithoon Zukerton | South Africa | 200 followers</p>
                    <p>Released Date © 2024</p>
                    <div className="d-flex gap-4">
                        <button className="btn-2 download-btn">Download<i className="bi bi-download"></i></button>
                        <button className="btn-2 play-btn">Play<i className="bi bi-play-btn"></i></button>
                        <button className="btn-1"><i className="bi bi-heart"></i></button>
                        <button className="btn-1"><i className="bi bi-three-dots"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <NewRealeses heading="You Might Like"/>
        <NewRealeses heading="Outstanding Uploads"/>
    </div>
  )
}

export default SinglePageSong