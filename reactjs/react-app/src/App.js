import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchData } from './utils/fetchData.js';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try{
        const fetchedData = await fetchData('https://oscarcordero24.github.io/DnD/data/143046_Complete.json');
        setData(fetchedData);
      } catch(error){
        console.error("There was an error: ", error);
      }
    }
    loadData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
