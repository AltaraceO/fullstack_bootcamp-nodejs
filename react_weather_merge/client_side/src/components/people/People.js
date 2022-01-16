import React, { useState, useEffect } from "react";

import weatherAPI from "../../api/api";

function People() {
  const [weather, setWeather] = useState("");
  const [address, setAddress] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const onHandleChange = (e) => {
    setAddress(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(address);
  };

  useEffect(() => {
    const getPpl = async () => {
      const data = await weatherAPI.get(`/weather?address=${searchTerm}`);
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
