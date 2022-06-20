import React from 'react'
import placeholder from '../assets/placeholder.png'

const Events = () => {
	return <>
		<h1 className='mt-10 px-10 text-2xl text-dark-blue font-bold'>Tüm Etkinlikler</h1>
		<div className='events-container mx-auto'>
			<div className="my-5 grid  md:grid-cols-3  auto-rows-auto  gap-5">
				<div className="event">
					<img src={placeholder} alt='event' />
					<p className='event-description'>Event Title</p>
					<button className='btn'>Detay Gör</button>
				</div>
				<div className="event">
					<img src={placeholder} alt='event' />
					<p className='event-description'>Event Title</p>
					<button className='btn'>Detay Gör</button>
				</div>
				<div className="event">
					<img src={placeholder} alt='event' />
					<p className='event-description'>Event Title</p>
					<button className='btn'>Detay Gör</button>
				</div>
				<div className="event">
					<img src={placeholder} alt='event' />
					<p className='event-description'>Event Title</p>
					<button className='btn'>Detay Gör</button>
				</div>
				<div className="event">
					<img src={placeholder} alt='event' />
					<p className='event-description'>Event Title</p>
					<button className='btn'>Detay Gör</button>
				</div>
			</div>
		</div>
	</>
}

export default Events