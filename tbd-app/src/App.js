import React, { useState } from "react";
import './App.css';
// import axios from "axios";
import NavBar from "./NavBar";
import Buttons from "./Data.json";
import Body from "./Body";

// const utf8 = require('utf8');
// "start-backend": "cd backend && env/bin/flask run --no-debugger",
// "proxy": "http://localhost:5000",

function App() {

  return (
    <div>
      <NavBar Buttons={Buttons.Buttons}/>
      <Body/>
    </div>
  );
}

export default App;
