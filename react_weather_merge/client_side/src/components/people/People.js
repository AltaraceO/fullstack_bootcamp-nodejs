// import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function People() {
  const [weather, setWeather] = useState("");
  const [address, setAddress] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const onHandleChange = (e) => {
    setAddress(e.target.value);
    console.log(address);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(address);
    setSearchTerm(address);
  };

  useEffect(() => {
    const getPpl = async () => {
      const data = await axios.get(
        `http://localhost:5000/weather?address=${searchTerm}`
      );

      console.log(data.data);
      setWeather(data.data);
    };
    getPpl();
  }, [searchTerm]);
  return (
    <div>
      <h2>Weather</h2>
      <form>
        <input onChange={onHandleChange} type="text" value={address} />
        <button onClick={onHandleSubmit}>Submit</button>
      </form>
      <br />
      {weather && (
        <>
          <div>{weather.forecast}</div>
          <br />
          <div>{weather.location}</div>
        </>
      )}
    </div>
  );
}

export default People;
