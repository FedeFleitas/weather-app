import React from 'react';
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import {WiDaySunnyOvercast}  from "react-icons/wi";


function Nav({onSearch}) {
  return (

    <nav className={"navbar navbar-dark"}>
    
      <Link to='/'>
        <span className="navbar-brand" id={styles.weather}>
          WeatherApp<WiDaySunnyOvercast/> 
        </span>
      </Link>

      <Link to='/about'>
        <span className={styles.about}>About</span>
      </Link>

      <SearchBar onSearch={onSearch} />

    </nav>
    
  );
};

export default Nav;
