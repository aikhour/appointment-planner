import React from "react";

export const Tile = ({  name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">
        {name}<br/>
      </p>
      {Object.values(description).map((value, index) => (
        <p key={index} classname="tile">
          {value}
        </p>
      ))}
    </div>
  );
};
