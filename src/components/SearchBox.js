import React from 'react';

const SearchBox = props => {
    return (
        <input
            onChange={e => props.onType(e)}
            type="text"
            placeholder="Enter a keyword"
        />
    )
}

export default SearchBox;