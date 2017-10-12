import React from 'react';
import Package from './Package'

const SearchResults = props => {
    return (
        <div id="SearchResults">
            {props.data.map((tour) => {
                return (
                    <Package key={tour.code} tour={tour} />
                )
            })}
        </div>     
    )
}
export default SearchResults;