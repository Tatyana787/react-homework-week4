
import './App.css';

function App() {
  let weatherData = {
    city: "London",
    update: "Last updated: 12:01",
    temp: "22",
    description: "Scattered clouds",
    humidity: "74",
    wind: "30"
  };

  return (
    <div className="App">
      <div>
        <div className="img mt-3 col-md-8 offset-md-2 col-sm-12">
          <div className="img-overlay">
            <div className="row">
              <div className=" col-md-6 col-sm-12 col-12 order-md-first order-last">
                <h1> {weatherData.city} </h1>
                <span className="update">{weatherData.update}</span>
              </div>
              <div className="pb-3  col-md-6 col-sm-12 col-12 order-firs">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type a city..."
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
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="temperature row">
                  <div className="col-4">
                    <img className="current-weather-icon" alt="" />
                  </div>

                  <div className="col-8">
                    <span className="temp">{weatherData.temp}</span>
                    <span className="unit col-1">°C</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="list">
                  <ul>
                    <li> {weatherData.description}</li>
                    <li>Humidity: {weatherData.humidity} %</li>
                    <li>Wind: {weatherData.wind} m/h</li>
                  </ul>
                </div>
              </div>
            </div>

            <div></div>
          </div>
          
        </div>
        <a href='https://github.com/Tatyana787/react-homework-week4'> Open-source code </a> by Tanya Stadnyk 
       
      </div>
     
    </div>
  );
}

export default App;
