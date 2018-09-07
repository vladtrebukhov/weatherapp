import React, { Component } from "react";
import Titles from "./components/titles.jsx";
import Form from "./components/form.jsx";
import Result from "./components/weather.jsx";
import "./App.css";
const apiKey = "a3043b4c2d41c3a6689d89c9a86c7d6c";

// api url for current weather: https://api.openweathermap.org/data/2.5/weather?q={city name}&APPID=a3043b4c2d41c3a6689d89c9a86c7d6c&units=imperial
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      maxtemp: undefined,
      mintemp: undefined,
      error: ""
    };
  }

  getWeather = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}&units=imperial`;
    if (city && country) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            maxtemp: data.main.temp_max,
            mintemp: data.main.temp_min,
            error: undefined
          });
          console.log(data);
        })
        .catch(error =>
          this.setState({
            error: "This location is not available"
          })
        );
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        maxtemp: undefined,
        mintemp: undefined,
        error: "Please enter a city and country"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Result
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                    maxtemp={this.state.maxtemp}
                    mintemp={this.state.mintemp}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
