import './Movie.css';

function Movie({ movie }) {
    let { poster, name, alternativeName, year } = movie;

    return (<div className="movie movie-card">
        <img className='movie__poster' src={ poster.previewUrl } />
        <h3>{ name || alternativeName }</h3>
        <p>{ year }</p>
    </div>)
}

export default Movie;