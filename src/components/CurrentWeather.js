import React from 'react';

const CurrentWeather = (props) => {
    
    const currentTemp = (props.data.list[0].main.temp).toFixed();
    const currentFeels = (props.data.list[0].main.feels_like).toFixed();

    return(
        <div className='currentWeather'>
            <div>Current Temp: {currentTemp} °C</div>
            <div>Feels Like: {currentFeels} °C</div>
            <div>humidity: {props.data.list[0].main.humidity} %</div>
        </div>
    )
}

export default CurrentWeather;