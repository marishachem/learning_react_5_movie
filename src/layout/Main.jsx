import React from 'react'
import {Movies} from '../Components/Movies'
import {Preloader} from '../Components/Preloader'
import {Search} from '../Components/Search'
import {RadioButton} from '../Components/RadioButton'


class Main extends React.Component {
    state = {
        movies: [],
        searchQuery: 'Alice',
        filterType: '',
    }

    componentDidMount() {
        this.searchMovies('Alice')
    }

    searchMovies = (str) => {
        const { filterType } = this.state;
        let url = `http://www.omdbapi.com/?apikey=d6ae8aa0&s=${str}`;
        if (filterType) {
            url += `&type=${filterType}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search }))
    }

    filterMovies = (type) => {
        const { searchQuery } = this.state;
        let url = `http://www.omdbapi.com/?apikey=d6ae8aa0&s=${searchQuery}`;

        if (type) {
            url += `&Type=${type}`;
        }
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search || [] }))

    }

    render() {
        const {movies} = this.state;
        return <main className = 'container content'>
            <Search searchMovies={this.searchMovies}/>
            <RadioButton filterMovies={this.filterMovies}/>

            {movies.length > 0 ?
                (<Movies movies={movies}/>
                    ):<Preloader/>
            }

        </main>
    }
}

export {Main}