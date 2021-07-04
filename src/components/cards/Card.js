import React from "react";
import "./card.css";

function Card({ album }) {
  return (
    <div className="resultCard">
      <figure className="image-container">
        <img src={album.thumbnailUrl} alt={album.title} className="thumbNail" />
      </figure>
      <p className="album-title"><b>Title:</b> {album.title}</p>
    </div>
  );
}

export default Card;
