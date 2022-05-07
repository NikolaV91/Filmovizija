import React from "react";
import "./homepage.scss";
import Card from "../../components/Card/Card.jsx";

const HomePage = (props) => {
  return (
    <div className="homepage">
      {props.movies
        .filter((e) => {
          if (props.search === "") {
            return e;
          } else if (
            e.name.toLowerCase().includes(props.search.toLowerCase())
          ) {
            return e;
          } else return null;
        })
        .map((e) => (
          <Card
            key={e.id}
            setShouldUpdate={props.setShouldUpdate}
            setMovie={props.setMovie}
            obj={e}
          />
        ))}
    </div>
  );
};

export default HomePage;
