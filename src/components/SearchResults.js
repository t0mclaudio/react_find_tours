import React from 'react';
import Package from './Package';
import NotFound from './notFound';

const SearchResults = props => {
    if (props.found > null) {
        return (
            <div id="SearchResults">
                <p className="searchNumber">{props.found} found in search results</p>
                {props.data.map((tour) => {
                    return (
                        <Package key={tour.code} tour={tour} />
                    )
                })}
            </div>     
        )
    } else {
        return (
            <NotFound />
        )
    }
}
export default SearchResults;