import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import DetailHeader from '../components/DetailHeader';
import DetailDescription from '../components/DetailDescription';
import DetailEvent from '../components/DetailEvent';
import SiteContext from '../context/SiteContext'
import { useLocation } from 'react-router-dom';

const EventDetail = () => {
	const data = useContext(SiteContext);

	const location = useLocation();

	const eventData = data.find((item) => {
		if (item.eventUrl === location.pathname.split('/')[2]) {
			return true;
		} else {
			console.log("hata");
			return false;
		}
	})
	return <>
		<Navbar />
		<DetailHeader name={eventData.eventName} img={eventData.eventImages} />
		<DetailDescription description={eventData.eventDescription} />
		<DetailEvent
			name={eventData.eventName}
			description={eventData.eventDescription}
			date={eventData.eventDate}
			location={eventData.eventLocation}
			price={eventData.price}
			category={eventData.eventCategory} />
		<Footer />
	</>

}

export default EventDetail