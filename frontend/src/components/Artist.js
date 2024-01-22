import React from "react";
import {NavLink} from "react-router-dom"

function Artist({ artist }) {

    //const {name, followers: {total}} = artist;

  return (
    <article>
      <div className="artist">
        <img src={`${artist.images[0].url}`} alt="" />
        <div className="content">
          <NavLink to={`/artist/${artist.id}`}>
            <h4>{artist?.name}</h4>
          </NavLink>
          <p>{artist?.followers.total}K Followers</p>
        </div>
      </div>
    </article>
  );
}

export default Artist;
