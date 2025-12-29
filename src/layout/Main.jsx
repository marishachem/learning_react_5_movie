import React from 'react'
import {Movies} from '../Components/Movies'
import {Preloader} from '../Components/Preloader'
import {Search} from '../Components/Search'
import {RadioButton} from '../Components/RadioButton'

const API_KEY = process.env.REACT_APP_API_KEY
class Main extends React.Component {
    state = {
        movies: [],
        searchQuery: 'Alice',
        filterType: '',
        loading:true,
    }

    componentDidMount() {
        this.searchMovies('Alice')
    }

    searchMovies = (str) => {
        this.setState({loading: true })
        const { filterType } = this.state;
        let url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`;
        if (filterType) {
            url += `&type=${filterType}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search,loading:false }))
    }

    filterMovies = (type) => {
        const { searchQuery } = this.state;
        let url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`;

        if (type) {
            url += `&Type=${type}`;
        }
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search || [] }))

    }

    render() {
        const {movies, loading} = this.state;
        return <main className = 'container content'>
            <Search searchMovies={this.searchMovies}/>
            <RadioButton filterMovies={this.filterMovies}/>

            {loading?
                (<Preloader/>):
                (<Movies movies={movies}/>)
            }

        </main>
    }
}

export {Main}
