import React, {useState} from 'react';

export const Search = (props) => {
    const {
        searchMovies = Function.prototype,
    } = props //на случай если не передадут функцию
    const [search, setSearch] = useState('')
    const [type, setType] = useState('all')


    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type);
        }
    }

    const handleFilter = (event) => {
        setType(event.target.value);
        searchMovies(search, event.target.value);
    }

    const handleSearch = () => {
        searchMovies(search, type);
    }

    return (
        <div className="row">
            <div className="input-field">
                <input
                    className="validate"
                    placeholder="search"
                    type="search"
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    onKeyDown={handleKey}
                />
                <button
                    className="btn search-btn" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        value="all"
                        onChange={handleFilter}
                        checked={type === 'all'}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        value="movie"
                        onChange={handleFilter}
                        checked={type === 'movie'}

                    />
                    <span>movies only</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        value="series"
                        onChange={handleFilter}
                        checked={type === 'series'}
                    />
                    <span>series only</span>
                </label>
            </div>
        </div>
    );

}


