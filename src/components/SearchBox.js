import React from 'react';

const SearchBox = props => {
    return (
        <input
            onChange={e => props.onType(e)}
            value={props.value} 
            type="text"
            placeholder="Enter a keyword"
        />
    )
}

export default SearchBox;