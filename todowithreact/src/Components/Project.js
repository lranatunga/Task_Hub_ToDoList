import React, { useState, useEffect} from "react";
import './App.css';
import './Lakmali.css';
import "./SideBar.css";
import './NavigationBar.css';
import NavigationBar from './NavigationBar';
import SideBar from './SideBar';

function Project() {


  return (
  
    <div className="App">
      <NavigationBar />
      <div className='main'>
        <div className='left-section'>
        <SideBar />
        </div>

    </div>
    </div>
  );
}

export default Project;



