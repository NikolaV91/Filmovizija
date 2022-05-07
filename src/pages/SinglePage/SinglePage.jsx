import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./single-page.scss";

const SinglePage = (props) => {
  const [seasons, setSeasons] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect((e) => {
    fetch(`https://api.tvmaze.com/shows/${props.movie.id}/seasons`)
      .then((result) => result.json())
      .then((data) => setSeasons(data));
  }, []);

  useEffect((e) => {
    fetch(`https://api.tvmaze.com/shows/${props.movie.id}/cast`)
      .then((result) => result.json())
      .then((data) => setCast(data));
  }, []);

  return (
    <div className="singleMainDiv">
      <h1>{props.movie.name}</h1>
      <div className="singleCardDiv">
        <img src={props.movie.image.original} alt="" />
        <div className="detailsDiv">
          <ul>
            Seasons: {seasons.length}
            {seasons.map((e) => {
              return (
                <li key={e.id}>
                  {e.premiereDate} to {e.endDate}{" "}
                </li>
              );
            })}
          </ul>
          <ul>
            Cast:
            {cast.map((e, i) => {
              return i < 10 ? (
                <li key={e.character.id}>
                  {e.person.name} As {e.character.name}
                </li>
              ) : null;
            })}
          </ul>
        </div>
        <div className="descriptionDiv">
          <p>
            <b>Description:</b>
            <br />
            {props.movie.summary}
          </p>
        </div>
      </div>
      <Link to={`/`} onClick={() => props.setMovie("")}>
        Back to home
      </Link>
    </div>
  );
};

export default SinglePage;
