import React from 'react'
import NewRealeses from '../components/NewRealeses'

function SinglePageSong() {
  return (
    <div className="container-fluid p-5 single-page-song">
        <div className="row align-items-center">
            <div className="col-md-3">
                <div>
                    <img src="../images/a2.jpg" className="song-cover-img" alt="" />
                </div>
            </div>
            <div className="col-md-9">
                <div>
                    <h3>Salaam Venky</h3>
                    <p>by Mithoon</p>
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
    </div>
  )
}

export default SinglePageSong