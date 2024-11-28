import './Movie.css';

function Movie({ movie }) {
    let { poster, name, alternativeName, year } = movie;

    let maxNameLength = 17
    const reduceName = name => {
        if (name.length <= maxNameLength + 3) return name
        name = name.split(' ')
        if (name.length <= 1) {
            return name[0].slice(0, maxNameLength) + '...'
        } 
        let result = ''
        let stopReduce = false
        result = name.reduce((result, item) => {
            let newResult = result + ' ' + item
            if ((newResult.length < maxNameLength) && !stopReduce) {
                return newResult
            } else {
                stopReduce = true
                return result
            }
        })
        return result + '...'
    }

    return (<div className="movie movie-card">
        <img 
            alt={name || alternativeName} 
            className='movie__poster' 
            src={ poster?.previewUrl || 'cinema.png' } 
        />
        <h3>{ reduceName(name || alternativeName) }</h3>
        <p>{ year }</p>
    </div>)
}

export default Movie;