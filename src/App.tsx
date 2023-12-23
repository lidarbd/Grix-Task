import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [ip, setIP] = useState("");
  
    const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIP(res.data.ip);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Your IP address</h1>
      <h4>{ip}</h4>
      
    </div>
  );
}

export default App;
