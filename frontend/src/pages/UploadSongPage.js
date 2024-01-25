import React, { useRef, useState } from "react";
import axios from "axios";
import useNotify from "../hooks/useNotify";
import { LOADING, loading, SUCCESS } from "../context/types";
import Loader from "../components/Loader";
import NotifyModal from "../components/NotifyModal";


const BACKEND_URL = "https://full-stalk-music-application-backend.onrender.com"
function UploadSongPage() {
  const {dispatch, loading, success, message} = useNotify();

  const [formParams, setFormParams] = useState({
    title: "",
    artist: "",
    category: "",
    song: null,
    cover: null,
  });
  const [songFile, setSongFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const {title, artist, category} = formParams

    if (!title || !artist || !category) {
        alert("Please fill all the fields")
        return
    }

    if (songFile) {
      let formData = new FormData();
      formData.append("title", title)
      formData.append("artist", artist)
      formData.append("category", category)
      formData.append("song", songFile);
      formData.append("cover", coverFile);

      const headers = {
        "Content-Type": "application/json"
      };


      try {
        dispatch({type: LOADING, payload: true});
        const response = await fetch(`${BACKEND_URL}/upload`, {
            method: "POST",
            body: formData
        })
        const data = await response.json();
        dispatch({type: LOADING, payload: false});
        dispatch({type: SUCCESS, payload: data})
      } catch (error) {}
    }
  };

  const handleChange = (e) => {
    setFormParams((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const selectFile = (e) => {
    const inputName = e.target.name;
    if (inputName == "song") {
        setSongFile(e.target.files[0]);
    }

    if (inputName == "cover") {
        setCoverFile(e.target.files[0]);
    }
  };


  return (
    <>
    {loading && <Loader />}
    {success && <NotifyModal success={success} message={message} />}
      <div className="container-fluid p-5 upload-song-container">
      <div className="upload-inner-container">
        <img src="images/logo2.png" className="logo2" alt="" />
        <div className="my-3">
          <h4>Song information</h4>
        </div>
        <div className="mt-3">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="row col-12">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="songTitle">Title</label>
                    <input
                      type="text"
                      className="form-control mt-2"
                      name="title"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="songTitle">Artist</label>
                    <input
                      type="text"
                      className="form-control mt-2"
                      name="artist"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4">
                <div className="form-group">
                  <label htmlFor="songTitle">Category</label>
                  <select
                    className="form-select mt-2"
                    name="category"
                    onChange={handleChange}
                  >
                    <option value="raggae">Raggae</option>
                    <option value="raggae">Love</option>
                  </select>
                </div>
              </div>
              <div className="col-12 mt-4">
                <div className="form-group">
                  <label htmlFor="songTitle">Song</label>
                  <input
                    type="file"
                    className="form-control mt-2"
                    name="song"
                    onChange={selectFile}
                  />
                </div>
              </div>
              <div className="col-12 mt-4">
                <div className="form-group">
                  <label htmlFor="songTitle">Cover</label>
                  <input
                    type="file"
                    className="form-control mt-2"
                    name="cover"
                    onChange={selectFile}
                  />
                </div>
              </div>
              <div className="col-12 mt-4">
                <div className="form-group">
                  <button type="submit" className="upload-btn">
                    Upload Song
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default UploadSongPage;
