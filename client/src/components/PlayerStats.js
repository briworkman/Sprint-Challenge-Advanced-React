import React from "react";

function PlayerStats(props) {
  return (
    <div>
      <h1>
        Name:{props.name}
        <br />
        Country: {props.country}
        <br />
        Searches: {props.searches}
      </h1>
    </div>
  );
}

export default PlayerStats;
