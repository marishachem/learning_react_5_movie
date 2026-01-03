import React from 'react';

export class Search extends React.Component {
      state = {
          search: '',
          type:'all',
      }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search,this.state.type);
        }
    }

    handleFilter = (event) => {
        const type = event.target.value;
        this.setState({ type }, () => {
            this.props.searchMovies(this.state.search, this.state.type);
        });

    }

    handleSearch = () => {
        this.props.searchMovies(this.state.search, this.state.type);
    }



    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        className="validate"
                        placeholder="search"
                        type="search"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={(e) => this.handleKey(e)}
                    />
                    <button
                        className="btn search-btn" onClick={ this.handleSearch }>
                        Search
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            value= "all"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            value= "movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}

                        />
                        <span>movies only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            value= "series"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>series only</span>
                    </label>
                </div>
            </div>
        );
    }
}


