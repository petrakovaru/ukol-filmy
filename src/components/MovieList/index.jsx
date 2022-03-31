import React from 'react';
import Movie from '../Movie';


const MovieList = ({movies}) => {
    const movielist = [];

    movies.forEach(movie => {
        movielist.push(
            <Movie title={movie.title} poster={movie.poster} year={movie.year} rating={movie.rating} director={movie.director} genre={movie.genre}/>
        )
    });

    return(
        <>
        {movielist}
        </>
    )
}

export default MovieList;