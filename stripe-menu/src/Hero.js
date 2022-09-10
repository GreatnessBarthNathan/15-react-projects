import React from 'react'
import {useGlobalContext} from './context'

function Hero () {
    const {removeSubmenu} = useGlobalContext()

    return <section className='container' onMouseOver={removeSubmenu}>
        <div className="content">
            <h1>Payments infrastructure for the internet</h1>
            <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe's software and APIs to accept payments, send payouts, and manage their businesses online.</p>
            <button>Start now</button>
        </div>
        <div className="image">
            <img src="https://react-projects-13-stripe-submenus.netlify.app/static/media/phone.58d7e3d6.svg" alt="" />
        </div>
    </section>
}

export default Hero