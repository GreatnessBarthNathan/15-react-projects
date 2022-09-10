import React from 'react'
import {FaAngleDoubleRight} from "react-icons/fa"

function Content ({jobs}) {
    const {company, title, dates, duties, id} = jobs
    return <div className="content" key={id}>
                    <h1>{title}</h1>
                    <h2>{company}</h2>
                    <h3>{dates}</h3>
                    {
                        duties.map((duty, index)=> {
                            return <p className='duties' key={index}><FaAngleDoubleRight className='icon'/>{duty}</p>
                        })
                    }
                </div>
}

export default Content