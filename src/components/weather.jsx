import React, { Component } from "react";

const Result = props => (
  <div className="weatherInfo">
    <p className="weatherKey">
      {props.temperature ? `Temperature: ${props.temperature} °F` : null}
    </p>
    <p className="weatherKey">
      {props.maxtemp ? `Maximum Temperature: ${props.maxtemp} °F` : null}
    </p>
    <p className="weatherKey">
      {props.mintemp ? `Minimum Temperature: ${props.mintemp} °F` : null}
    </p>
    <p className="weatherKey">
      {props.humidity ? `Humidity: ${props.humidity}` : null}
    </p>
    <p className="weatherKey">
      {props.description ? `Conditions: ${props.description}` : null}
    </p>
    <p className="weatherKey">
      {props.error !== undefined ? props.error : null}
    </p>
  </div>
);

export default Result;
