import './App.css';
import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from './WeatherInfo';
import FormattedDate from './FormattedDate';

export default function App(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  //search();

  //console.log(props.defaultCity)
  function showWeather(response) {
    
    setWeatherData ({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      iconName:response.data.weather[0].icon
    })
  }

function search(){
  const apiKey = "8c27e32a44363e7c302056624eb9fac6"
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showWeather);
}

  function handleSubmit(event){
    event.preventDefault();
    search() 
  }

  function showValue(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready){
  return (    
    <div className="App">
      <div>
        <div className="img mt-3 col-md-8 offset-md-2 col-sm-12">
          <div className="img-overlay">
            <div className="row">
              <div className=" col-md-6 col-sm-12 col-12 order-md-first order-last">
                <h1> {weatherData.city} </h1>
              
                <span className="update"> <FormattedDate date={weatherData.date} /> </span>
              </div>
              <div className="pb-3  col-md-6 col-sm-12 col-12 order-firs">
                
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control" 
                      placeholder="Type a city..."
                      onChange={showValue}
                      aria-label="Recipient's username with two button addons"
                    />
                    
                    <button
                      className="btn btn-outline-secondary btn-search"
                      type="submit"
                    >
                      Search
                    </button>
                    
                    <button
                      className="btn btn-outline-secondary btn-location"
                      type="button"
                    >
                      <i className="fa-solid fa-location-dot"></i>
                      Geo
                    </button>
                  </div>
                </form>
              </div>
            </div>

           <div> <WeatherInfo data={weatherData} /> </div> 
          </div>       
        </div>   
      </div>
      <div className=" weather-app-wrapper  offset-lg-3  col-md-8 offset-md-2 col-sm-6 offset-sm-1 offset-1">
        <a
          className="link-code"
          target="blank"
          href="https://github.com/Tatyana787/react-homework-week4"
        >
           {"Open-source code "}
        </a>
            by Tanya Stadnyk
      </div> 
    </div>
    );
  }  else {
    search();
    return ("loading...");
  }
  }