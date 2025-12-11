import React from 'react'
import Header from '../Elements/Header'
import SpecialityMenu from '../Elements/SpecialityMenu'
import TopDoctors from '../Elements/TopDoctors'
import Banner from '../Elements/Banner'

const Home = () => {
  return (
    <div>
         <Header/>
         <SpecialityMenu/>
         <TopDoctors/>
         <Banner />
    </div>
  )
}

export default Home