import React from "react";
import { Link } from "react-router-dom";

import "./card.scss";

const Card = (props) => {
  return (
    <div className="singleCard" onClick={() => props.setMovie(props.obj.id)}>
      <Link to={`/singlePage/${props.obj.id}`}>
        <img src={props.obj.image.original} alt="" />
      </Link>
      <h2>{props.obj.name}</h2>
    </div>
  );
};

export default Card;
