import React from "react";

function PlayerStats(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Country: {props.country}</p>
      <p>Searches: {props.searches}</p>
    </div>
  );
}

export default PlayerStats;
