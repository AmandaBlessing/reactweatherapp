import React from 'react';
import Weather from './Weather';

import './App.css';



function App() {
  return (
    <div className="App">
      <div className='container'>
      <footer>
          <h1>Weather</h1>
          <Weather />
        This project was coded by {" "}
        <a href='' target='_blank'>
          Amanda khumalo
        </a> {" "}
        and is{" "}
        <a href='https://github.com/AmandaBlessing' target='_blank'>
          open-sourced on Github
        </a>
        </footer>
        </div>
    </div>
  );
}

export default App;