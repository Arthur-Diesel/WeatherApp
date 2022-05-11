import React from 'react'

export default function Card(props){

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    function getWeekday(date){
        return weekday[date.getDay()]
    }

    return(
        <div>
            <div className='container w-100 text-center text-white'>
                <h2 className='display-6 mb-3 mt-3'>{getWeekday(props.date)}</h2>
                <div className='pt-3 pb-1 px-3 shadow border border-white'>

                    <p>Weather Condition: <span className="lead">{props.data.day.condition.text}</span></p>
                    <p>Maximum Temperature in Celsius Degrees: <span className="lead">{props.data.day.maxtemp_c}</span></p>
                    <p>Minimum Temperature in Celsius Degrees: <span className="lead">{props.data.day.mintemp_c}</span></p>
                    <p>Maximum Wind in KM/H: <span className='lead'>{props.data.day.maxwind_kph}</span></p>
                    <br />
                    <p>% of Rain Probability: <span className='lead'>{props.data.day.daily_chance_of_rain}</span></p>
                    <p>% of Snow Probability: <span className='lead'>{props.data.day.daily_chance_of_snow}</span></p>
                    <br />
                    <p>Maximum Temperature in Fahrenheit Degrees: <span className='lead'>{props.data.day.maxtemp_f}</span></p>
                    <p>Minimum Temperature in Fahrenheit Degrees: <span className='lead'>{props.data.day.mintemp_f}</span></p>
                    <p>Maximum Wind in M/H: <span className='lead'>{props.data.day.maxwind_mph}</span></p>

                </div>
            </div>
        </div>
    )
}