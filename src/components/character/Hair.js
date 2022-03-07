import { React, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";

const Hair = () => {
  //Here i can write javascript code and functions
  const url = "/cc/api/hair/";
  const [hair, sethair] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      sethair(response.data);
    });
  }, [url]);
  if (hair) {
    return (
      <div className="app-card">
        <span>{hair[0].id}</span>
        <div className="app-card__subtext">The Color is: {hair[0].color}</div>
        <div className="app-card__subtext">The Style is: {hair[0].style}</div>
        <div className="app-card-buttons">
          <button className="content-button status-button">Update</button>
          <div className="menu"></div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1>NO HAIR FOUND!</h1>
    </div>
  );
};

export default Hair;
