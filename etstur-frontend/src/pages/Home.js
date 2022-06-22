import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PopulerEvents from '../components/PopulerEvents'
import SearchEvent from '../components/SearchEvent'



const Home = () => {
  return <>
	<Navbar />
	<PopulerEvents />
	<SearchEvent />
	<Footer />
  </>
}

export default Home