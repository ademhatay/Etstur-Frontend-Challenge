import React from 'react'
import placeholder from '../assets/placeholder.png'

const Event = ({ item }) => {
	return <>
		<div className="event">
			<img src={
				item.eventImages.length == 0 ? item.defaultImage : item.eventImages[0]
			}
				alt='event' />
			<p className='event-description'>
				{item.eventName.length >= 14 ? item.eventName.substring(0, 14) + '...' : item.eventName}
			</p>
			<a href='/detail' className='btn'>Detay Gör</a>
		</div>
	</>
}

export default Event