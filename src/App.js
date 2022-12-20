import React, {useEffect, useState} from 'react'
import './App.css';
import Header from './components/Header';


function App() {

  const initialURL ="https://geocoding-api.open-meteo.com/v1/search?name=new%20york&count=100";

  const fetchGeo = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data.results))
    .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchGeo(initialURL);
  },[])

  return (
    <header>
      <Header/>
    </header>
  );
}

export default App;
