import React from 'react'
import axios from 'axios'
import moment from 'moment'

const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=Curitiba&aqi=no`

export default function Subheader(){
    const [data, setData] = React.useState("")
    const date = moment().format('LLLL')

    React.useEffect(() => {
        axios.get(url).then((response) => setData(response.data.current))
    }, [])

    return(
        <div className='w-100 text-center text-white'>
            {data && <h2 className='lead'>{date}</h2>}
            {data && <h2 className='lead'>{data.condition.text} <img src={data.condition.icon} alt="Imagem representando condição atual de clima."/></h2>}
            {data && <h2 className='lead'>{data.temp_c}°C ~ {data.temp_f}°F</h2>}
        </div>
    )
}