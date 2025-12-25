import React from 'react'
import {Movies} from '../Components/Movies'
import {Preloader} from '../Components/Preloader'
import {Search} from '../Components/Search'


class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=d6ae8aa0&s=Alice')
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search }))
    }

    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=d6ae8aa0&s=${str}`)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search }))
    }

    render() {
        const {movies} = this.state;
        return <main className = 'container content'>
            <Search searchMovies={this.searchMovies}/>
            {movies.length > 0 ?
                (<Movies movies={movies}/>
                    ):<Preloader/>
            }
        </main>
    }
}

export {Main}