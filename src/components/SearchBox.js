import React from 'react';

const SearchBox = props => {
    const onType = event =>{
        props.onType(event)
    }
    return (
        <input onChange={onType} type="text" placeholder="Enter a keyword" />
    )
}

export default SearchBox;