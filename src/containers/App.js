import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import City from '../components/City.jsx';
import styles from './App.module.css'
import swal from 'sweetalert';


const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(city) {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const city = {
            min: Math.round(recurso.main.temp_min - 273.15),
            max: Math.round(recurso.main.temp_max - 273.15),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          swal("Oops!", "Try another city", "error");
        }
      });
  }
  function onFilter(cityId) {
    let city = cities.filter(c => c.id === parseInt(cityId));
    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  }
  return (

    <div className="App">
      <div className={styles.bkg}></div>
      <div className={styles.app}>
        <div className={styles.container}>
          <Router>
            <Route path='/' render={() => <Nav onSearch={onSearch} />} />
            <Route exact path='/' render={() => <Cards cities={cities} onClose={onClose} />} />
            <Route exact path='/city/:cityId' render={({ match }) => <City city={onFilter(match.params.cityId)} />} />
            <Route exact path='/about' component={About} />
          </Router>
        </div>
      </div>
    </div>

  );
}

export default App;
