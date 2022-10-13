import react , { Component}  from 'react';
import         { render   }  from 'react-dom';
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import Header from './Components/Header';
import Grid from './Components/Grid/Grid';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Chm from './Chm';
function App() {
  return (
    <div className="App">
      <div classname = "container">
      <BrowserRouter>
          <Header />
          <h3>Smart Technologies Information Management System</h3>
          <h4>Tech Tools used for farming</h4>
          <Routes>
            <Route exact path="/" element={<Grid />} />
            <Route exact path="/chm" element={<Chm />} />
            {/* <Route exact path="/login" element={<Login />} /> */}
            {/* <Route exact path="/sign-up" element={<Signup />} /> */}
            {/* <Route exact path="/:name" element={<UploadFIle2 />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
