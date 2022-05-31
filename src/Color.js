import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Color.css";

function Color({ colors }) {
  const { color } = useParams();

  return (
    <div>
      <div className="Color" style={{ backgroundColor: colors[color] }}>
        <p> this is {color}.</p>
        <p>Pretty Neat, huh?</p>
      </div>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Color;
