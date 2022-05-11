import React from 'react'

export default function Header(){
    return(
        <header>
            <div className='w-100 text-center pt-3 pb-3 text-white'>
                <h1 className='display-2'><i className="bi bi-cloud-sun"></i> Weather App ~ Curitiba <i className="bi bi-cloud-rain"></i></h1>
            </div>
        </header>
    )
}