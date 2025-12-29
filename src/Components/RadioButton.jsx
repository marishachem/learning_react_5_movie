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

                    <label>
                        <input
                            name="All"
                            type="radio"
                            checked = { this.state.selectedType === '' }
                            onChange = { () => this.handleTypeChange('') }/>
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            name="movies"
                            type="radio"
                            checked = { this.state.selectedType === 'movie' }
                            onChange = { () => this.handleTypeChange('movie')}/>
                        <span>movies</span>
                    </label>
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
            </form>
        )
    }
}