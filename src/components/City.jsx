import React from "react";
import styles from './City.module.css';

export default function City({ city }) {
    return (
        <div className={styles.city}>
            <div className={styles.container}>
                {city === undefined && <h2>Loading...</h2>}
                <h1>{city.name}</h1>
                <div className={styles.info}>
                    <h2>Temperature: {city.temp} ºC</h2>
                    <h2>Weather: {city.weather}</h2>
                    <h2>Wind: {city.wind} km/h</h2>
                    <h2>Clouds: {city.clouds}</h2>
                    <h2>Lat: {city.latitud}º</h2>
                    <h2>Long: {city.longitud}º</h2>
                </div>
            </div>
        </div>
    )
}