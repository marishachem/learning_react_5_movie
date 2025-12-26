import React from 'react';

export class Search extends React.Component {
    constructor()
    {
        super();
        this.state = {
            search: '',
        };
        this.handleKey = this.handleKey.bind(this);
    }

    handleKey = (event) =>  {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
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
                        className="btn search-btn" onClick={ () => this.props.searchMovies(this.state.search)}>
                        Search
                    </button>
                </div>
            </div>
        );
    }
}


