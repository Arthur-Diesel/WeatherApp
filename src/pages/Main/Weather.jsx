import React from 'react'
import axios from 'axios'
import './Weather.css'

import Header from '../../components/Header/Header'
import Subheader from '../../components/Subheader/Subheader'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'

const today = new Date()
const tomorrow = new Date(Date.now() + ( 3600 * 1000 * 24))
const afterTomorrow = new Date(Date.now() + ( 3600 * 1000 * 48))
const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=Curitiba&days=3&aqi=no&alerts=no`

export default function Weather(){
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        axios.get(url).then((response) => setData(response.data))
    }, [])

    return(
        <>
            <Header />
            <Subheader />
            <div className='container mt-3 mb-4'>
                <div className='row'>
                    <div className='col-sm'>
                        {data && <Card date={today} data={data.forecast.forecastday[0]}/>}
                    </div>
                    <div className='col-sm'>
                        {data && <Card date={tomorrow} data={data.forecast.forecastday[1]}/>}
                    </div>
                    <div className='col-sm'>
                        {data && <Card date={afterTomorrow} data={data.forecast.forecastday[2]}/>}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}