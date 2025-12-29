import React from 'react';
import {Movie} from './Movie'

export function Movies(props) {
    const {movies} = props;
    console.log(movies);
    return <div className="movies">
        {movies.map((movie, idx) => (
            <Movie key={movie.imdbID + idx} {...movie} />
        ))}
    </div>;
    //{...movie} spread оператор чтоб все параметры не передавать
}

