import React from 'react';

const Title = ({ cityName }) => {
    return (
        <h1 className="title">
            Hello!
            <br></br>
            This is the weather in {cityName}
        </h1>
    )
}

export default Title;