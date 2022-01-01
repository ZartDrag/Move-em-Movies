import React from "react";

function MenuItem({ image, name, imdb, rotTom }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> IMDB: {imdb} </p>
      <p> Roten Tomatoes: {rotTom}% </p>
    </div>
  );
}

export default MenuItem;
