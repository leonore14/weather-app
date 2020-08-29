import React from 'react';
import Moment from 'react-moment';

const Day = (props) => {

    {/*const mydate= new Date(props.dt_txt)*/}

    const weeklyTemp = (props.main.temp).toFixed();
    const weeklyFeels = (props.main.feels_like).toFixed();


    return( 

        <>
        <div className="dayDiv">
            <img src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} />
            <div>
                <h4><Moment format='ddd MMMM Do'>{props.dt_txt}</Moment></h4>
                {/*<h3>{mydate.toDateString()}</h3>*/}
                <div>Temperature {weeklyTemp}°C</div>
                <div>Feels Like {weeklyFeels}°C</div>
                <div>Humidity {props.main.humidity}%</div>
            </div>
        </div>
        </>
    )
}

export default Day;