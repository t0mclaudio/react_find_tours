import React from 'react';

const Package = props => {
    return (
        <div>
            <h3>{props.tour.name}</h3>   
            <p>{props.tour.description}</p>
        </div>     
    )
}
export default Package;