import { React, useEffect, useState } from "react";
import Hair from "./Hair";

const CharacterMain = () => {
  //Here i can write javascript code and functions

  return (
    <div className="content-section">
      <div className="content-section-title">Apps in your plan</div>
      <div className="apps-card">
        <Hair />
      </div>
    </div>
  );
};

export default CharacterMain;
