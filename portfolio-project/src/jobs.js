import React, {useState, useEffect} from 'react'
import {data} from './data'
import Tabs from './tabs'
import Content from './content'


function Jobs () {
const [jobs, setJobs] = useState(data[0])
const [value, setValue] = useState(0)

function changeValue (index) {
    setJobs(data[index])
    setValue(index)
}
return (
    <div className="container">
           <Tabs changeValue={changeValue} value={value}/>
           <Content jobs={jobs} />
    </div>
)
}

export default Jobs