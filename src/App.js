import logo from './logo.svg';
import './App.css';
import { APIKEY } from './env';
import { useState, useEffect } from 'react'
import Movies from './components/Movies/Movies'
import SearchField from './components/SearchField/SearchField';

import { CircularProgress } from '@mui/material';

function App() {
  let [searchField, setSearchField] = useState("")
  let [loading, setLoading] = useState(true)
  const URL = 'https://api.kinopoisk.dev/v1.4/movie/search?query='

  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(URL + searchField, {
        headers: {
          'X-API-KEY': APIKEY
        }
      })
      const data = await res.json()
      setMovies(data.docs)
      setLoading(false)
    }

    fetchMovies()
  }, [URL, searchField])

  let timer;
  function handleChange(event) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      setSearchField(event.target.value);
      setLoading(true)
    }, 1000)
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchField onChange={handleChange} />
      </header>
      <main className="App-main">
        {
          loading ? <CircularProgress color='black' thickness={5} /> : 
          <>
            <Movies movies={movies} />
          </>
        }
      </main>
    </div>
  );
}

export default App;
