import React from 'react';
import {Movie} from './Movie'

export function Movies(props) {
    const {movies} = props;
    return <div className="movies">
        {movies.length ?
            movies.map(movie => (
            <Movie key = {movie.imdbID} {...movie} />
        )) : (<h4>Nothing found</h4>)}
    </div>;
    //{...movie} spread оператор чтоб все параметры не передавать
}

