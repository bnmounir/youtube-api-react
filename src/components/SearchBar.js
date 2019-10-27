import React, { Component } from 'react';

export class SearchBar extends Component {
    state = { term: '' };

    handleChange = event => {
        this.setState({ term: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        //
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='ui fluid action input'>
                        <input
                            placeholder='Search Videos...'
                            type='text'
                            name='search'
                            id='search'
                            value={this.state.term}
                            onChange={this.handleChange}
                        />
                        <button className='ui button' type='submit'>
                            Search
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
