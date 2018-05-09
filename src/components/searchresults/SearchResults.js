import React, { Component } from 'react';
import './SearchResults.css';
import TrackList from "../tracklist/TrackList";

class SearchResults extends Component {

    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} shouldAdd={true}/>
            </div>
        )
    }
}

export default SearchResults;