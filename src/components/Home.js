import React from 'react';
import CurrentWeather from './CurrentWeather';
import Title from './Title';
import Search from './Search';
import DaysList from './DaysList';


const Home = (props) => {
    return (
        <>
            <div>
            <Search onSearch={props.onSearch} />
            <Title cityName={props.cityName} />
            <CurrentWeather data= {props} />
            <DaysList data={props} />
            </div>
        </>
    )
}

export default Home ;