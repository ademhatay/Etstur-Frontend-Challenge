import React from 'react'
import Event from './Event'

const Events = () => {
	return <>
		<h1 className='mt-10 px-10 text-2xl text-dark-blue font-bold'>Tüm Etkinlikler</h1>
		<div className='events-container mx-auto'>
			<div className="my-5 grid  md:grid-cols-3  auto-rows-auto  gap-5">
				<Event />
				<Event />
				<Event />
				<Event />
				<Event />
				<Event />
				<Event />
				<Event />
				<Event />
				<Event />
				<Event />
			</div>
		</div>
	</>
}

export default Events