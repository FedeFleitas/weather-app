import React from "react";

export default function Detail({city}) {
    return (
        <div className="city">
                <div className="container">
                {city === undefined && <h2>Cargando...</h2>}
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperature: {city.temp} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Clouds: {city.clouds}</div>
                        <div>Lat: {city.latitud}º</div>
                        <div>Long: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}