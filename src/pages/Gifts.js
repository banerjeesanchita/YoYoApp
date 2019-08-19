import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Service from '../components/Service'

const Gifts = () => {
    return (
        <>
       <Hero hero="defaultHero">
       <Banner title="our gifts">
           
               <Link to='/error' className="btn-primary">Go back to home </Link>
           
       </Banner>
       </Hero>
       <Service></Service>
       </>
    )
}

export default Gifts
