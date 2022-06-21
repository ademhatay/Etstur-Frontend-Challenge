import React from 'react'
import Events from '../components/Events'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PopulerEvents from '../components/PopulerEvents'
import SearchBar from '../components/SearchBar'



const Home = () => {
  return <>
	<Navbar />
	<PopulerEvents />
	<SearchBar />
	<Events />
	<Footer />
  </>
}

export default Home