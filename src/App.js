import logo from './logo.svg';
import './App.css';
import { APIKEY } from './env';
import { useState, useEffect } from 'react'
import Movies from './components/Movies/Movies'

function App() {
  let [searchField, setSearchField] = useState("")
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
    }

    fetchMovies()
  }, [URL, searchField])

  let timer;
  function handleChange(event) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      setSearchField(event.target.value);
    }, 1000)
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={handleChange} />
        <Movies movies={movies} />
      </header>
    </div>
  );
}

export default App;
