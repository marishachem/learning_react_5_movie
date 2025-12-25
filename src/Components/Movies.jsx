import React from 'react';
import {Movie} from './Movie'

export function Movies(props) {
    const {movies} = props;
    return <div className="movies">
        {movies.map(movie => (
            <Movie key = {movie.imdbID} {...movie} />
        ))}
    </div>;
    //{...movie} spread оператор чтоб все параметры не передавать
}

