import './Movie.css';
import { useState } from 'react';

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

    const colors = ['aquamarine', 'cadetblue', 'aqua', 'limegreen', 'lightgreen']
    const [color, setColor] = useState(0)

    const changeBG = () => {
        let newColor = Math.floor(Math.random() * colors.length)
        while(color === newColor) {
            newColor = Math.floor(Math.random() * colors.length)
        }
        setColor(newColor)
    }
    // const [color, setColor] = useState([120, 100, 240])
    // const changeBG = () => {
    //     setColor([
    //         Math.floor(Math.random() * 256), 
    //         Math.floor(Math.random() * 256), 
    //         Math.floor(Math.random() * 256), 
    //     ])
    // }

    return (
    <div 
    onMouseEnter={changeBG} 
    style={{ background: colors[color] }}
    // style={{ background: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}
    className="movie movie-card">
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