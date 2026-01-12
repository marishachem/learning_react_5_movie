import React, {useState, useEffect} from 'react'
import {Movies} from '../Components/Movies'
import {Preloader} from '../Components/Preloader'
import {Search} from '../Components/Search'


const API_KEY = process.env.REACT_APP_API_KEY
export function Main() {
    const [movies, setMovies] = useState([])
    const [searchQuery, setSearchQuery] = useState('Alice')
    const [filterType, setFilterType] = useState('all')
    const [loading, setLoading] = useState(true)

    const searchMovies = (str, type = 'all') => {
        setLoading(true);
        setSearchQuery(str || 'Alice')
        setFilterType(type)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str || 'Alice'}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.Search || []);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            });
    }

    useEffect(() => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}${filterType !== 'all' ? `&type=${filterType}` : ''}`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.Search || []);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            });

    },[]);

    return (
        <main className='container content'>
            <Search searchMovies={searchMovies}/>
            {loading ?
                (<Preloader/>) :
                (<Movies movies={movies}/>)
            }
        </main>)
}

