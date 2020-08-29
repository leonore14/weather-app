import React, { useState, useEffect } from 'react';
import Day from './Day';

const DaysList = (props) => {

    const[dailyData, setDailyData] = useState([]);

    useEffect(()=> setData(), [props])
    
    const setData = () => {
        setDailyData(
            props.data.list.filter(data => 
                data.dt_txt.includes('12:00:00')
            )
        )
    }

    return(
        <>
            <h2 className="weeklyTitle">Weekly Weather in {props.data.cityName}</h2>
            <div className="dayList">{
            dailyData.map(day => <Day {...day} key={day.dt_txt} />)
            }
            </div>
        </>
    )
}

export default DaysList ;