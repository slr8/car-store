import React from 'react'
import Hero from '../components/Hero'
import CarForm from '../components/CarForm'
import PlanTrip from '../components/PlanTrip'
import PickCar from '../components/PickCar'
import Banner from '../components/Banner'
import ChooseUs from '../components/ChooseUs'

const Home = () => {
    return (
        <>
            <Hero />
            <CarForm />
            <PlanTrip />
            <PickCar />
            <Banner />
            <ChooseUs />
        </>
    )
}

export default Home