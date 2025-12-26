import React from "react";

export class RadioButton extends React.Component {
    state = {
        selectedType:'',
    }

    handleTypeChange = (type) =>  {
       this.setState({selectedType: type});
       this.props.filterMovies(type);
    }

    render() {
        return (
            <form action="#">
                <p>
                    <label>
                        <input
                            name="All"
                            type="radio"
                            checked = { this.state.selectedType === '' }
                            onChange = { () => this.handleTypeChange('') }/>
                        <span>All</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            name="movies"
                            type="radio"
                            checked = { this.state.selectedType === 'movie' }
                            onChange = { () => this.handleTypeChange('movie')}/>
                        <span>movies</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            className="series"
                            name="series"
                            type="radio"
                            checked = { this.state.selectedType === 'series' }
                            onChange = { () => this.handleTypeChange('series')}
                        />
                        <span>series</span>
                    </label>
                </p>

            </form>
        )
    }
}