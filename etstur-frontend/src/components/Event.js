import React from 'react'
import placeholder from '../assets/placeholder.png'

const Event = () => {
	return <>
		<div className="event">
			<img src={placeholder} alt='event' />
			<p className='event-description'>Etkinlik Adı</p>
			<a href='/detail' className='btn'>Detay Gör</a>
		</div>
	</>
}

export default Event