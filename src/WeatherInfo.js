import React from "react";
import './App.css';
import'./index.css';
// import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props){
    return(

     <div className="WeatherInfo">
        
        <div className="row">
              <div className="col-6">
                <div className="temperature row">
                  <div className="col-4">
                    <img className="current-weather-icon" src={props.data.icon} alt="" />
                  </div>

                  <div className="col-8">
                    <span className="temp">{props.data.temperature}</span>
                    <span className="unit col-1">°C</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="list">
                  <ul>
                    <li> {props.data.description}</li>
                    <li>Humidity: {props.data.humidity} %</li>
                    <li>Wind: {props.data.wind} m/h</li>
                      {/* <li>Wind: {weatherData.wind.detDay()} m/h</li> */}
     

                  </ul>
                </div>
              </div>
            </div>
     </div>

    )
}