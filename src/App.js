import logo from './logo.svg';
import './App.css';
import { APIKEY } from './env';
import { useState, useEffect } from 'react'

function App() {
  const URL = 'https://api.kinopoisk.dev/v1.4/movie?year=2023&genres.name=криминал'

  useEffect(() => {
    fetch(URL, {
      headers: {
        'X-API-KEY': APIKEY
      }
    })
      .then(res => res.json())
      .then(console.log)
      .catch(console.log)
  }, [URL])

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
