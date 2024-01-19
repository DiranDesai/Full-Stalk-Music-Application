import React, { useRef, useState } from 'react'
import axios from 'axios'

function UploadSongPage() {
    const [formParams, setFormParams] = useState({
        title: "",
        artist: "",
        category: "",
        song: null,
        cover: null
    })
    const [songFile, setSongFile] = useState(null)

    const songRef = useRef(null)
    const coverRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        // const {title, artist, category, song, cover} = formParams

        // if (!title || !artist || !category || !song || !cover) {
        //     alert("Please fill all the fields")
        //     return
        // }

        // const songFile = songRef.current.files[0]
        // const coverFile = coverRef.current.files[0]

        const formData = new FormData()
        formData.append("song", songFile)
        //formData.append("cover", coverFile)
        const headers = {
            "Content-Type": "application/json"
        }

        try {
            const response = await axios.post(`http://localhost:5000/upload`, formData, {
                headers: headers,
            });
            const data = await response.json();
            return data;
        } catch (error) {
            
        }
        
    }

    const handleChange = (e) => {
        setFormParams(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const selectFile = (e) => {
        setSongFile(e.target.files[0])
    }


  return (
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
                                <input type="text" className="form-control mt-2" name="title" onChange={handleChange} />
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-group">
                                <label htmlFor="songTitle">Artist</label>
                                <input type="text" className="form-control mt-2" name="artist" onChange={handleChange} />
                            </div>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="form-group">
                                <label htmlFor="songTitle">Category</label>
                                <select className="form-select mt-2" name="category" onChange={handleChange}>
                                    <option value="raggae">Raggae</option>
                                    <option value="raggae">Love</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="form-group">
                                <label htmlFor="songTitle">Song</label>
                                <input type="file" className="form-control mt-2" name="song" onChange={selectFile} ref={songRef} />
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="form-group">
                                <label htmlFor="songTitle">Cover</label>
                                <input type="file" className="form-control mt-2" name="cover" onChange={handleChange} ref={coverRef} />
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="form-group">
                                <button type="submit" className="upload-btn">Upload Song</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UploadSongPage