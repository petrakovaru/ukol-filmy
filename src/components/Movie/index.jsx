import React from 'react';

const Movie = ({title, poster, year, rating, director, genre}) => {
    return (
        <>
        <img src={"/assets/" + poster} alt={title} />
        <h2>{title}</h2>
        <ul>
            <li>Year: {year}</li>
            <li>Genre: {genre}</li>
            <li>Directed by: {director}</li>
            <li>Rating: {rating}</li>
        </ul>
        </>
    )
}

export default Movie;