import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import DetailHeader from '../components/DetailHeader';
import DetailDescription from '../components/DetailDescription';
import DetailEvent from '../components/DetailEvent';
import DetailMap from '../components/DetailMap';

const EventDetail = () => {
	
	return <>
		<Navbar />
		<DetailHeader />
		<DetailDescription />
		<DetailEvent />
		<DetailMap />
		<Footer />
	</>

}

export default EventDetail