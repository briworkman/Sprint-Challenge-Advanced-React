import React from "react";

function PlayerStats(props) {
  return (
    <div className="card-container">
      <div className="player-card">
        <h3 className="player-name">Name: {props.name}</h3>
        <p>Country: {props.country}</p>
        <p>Searches: {props.searches}</p>
      </div>
    </div>
  );
}

export default PlayerStats;
