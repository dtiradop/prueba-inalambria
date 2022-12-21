import React, {useEffect, useState} from 'react'
import './App.css';
import Header from './components/Header';
import Table from './components/Table';

function App() {

  const initialURL ="https://geocoding-api.open-meteo.com/v1/search?name=new%20york&count=100";
 
  const [table, settable] = useState([]);

  const fetchGeo = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => settable(data.results))
    .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchGeo(initialURL);
  },[])

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <Table table = {table} />  
      </div>
      </div>
  );
}

export default App;
