import React, { useState } from "react";
import './App.css';
import ButtonBar from "./ButtonBar";

function NavBar(Buttons) {
  const randFunc = () => {
    console.log("Hey")
  }
  return (
    <div className="NavBar">
      <h1 className="Home" onClick={randFunc}>
        Qdog
      </h1>
      <ButtonBar Buttons={Buttons.Buttons}/>
    </div>
  );
}

export default NavBar;
