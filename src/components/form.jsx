import React, { Component } from "react";

const Form = props => (
  <form onSubmit={e => props.getWeather(e)}>
    <input
      className="city"
      type="text"
      name="city"
      placeholder="Enter a city..."
    />
    <input
      className="country"
      type="text"
      name="country"
      placeholder="Enter a country..."
    />
    <button>Search</button>
  </form>
);

export default Form;
