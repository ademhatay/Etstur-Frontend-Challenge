import React from 'react'
import { Link } from 'react-router-dom'


const Event = ({ item }) => {
	return <>
		<div className="event">
			<img src={
				item.eventImages.length === 0 ? item.defaultImage : item.eventImages[0]
			}
				alt='event' />
			<p className='event-description'>
				{item.eventName.length >= 14 ? item.eventName.substring(0, 14) + '...' : item.eventName}
			</p>
			<Link to={`detail/${item.eventUrl}`} className="btn !bg-dark-blue text-white">Detay</Link>
		</div>
	</>
}	

export default Event