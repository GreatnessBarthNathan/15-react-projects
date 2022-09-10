import React, {useState} from 'react'
import {data} from './data'

function Tabs ({changeValue, value}) {
    
    return (
        <div className='tabs-container'>
            {
                data.map(({company}, index)=> {
                    return <button className={`job-btn ${index === value && 'active-btn'}`} onClick={()=> changeValue(index)} key={index}>{company}</button>
                })
            }
        </div>
    )
}

export default Tabs