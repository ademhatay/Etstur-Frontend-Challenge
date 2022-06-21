import React from 'react'
import Event from './Event'
import { useContext } from 'react'
import SiteContext from '../context/SiteContext'

const Events = () => {
	const data = useContext(SiteContext)
	return <>
		<h1 className='mt-10 px-10 text-2xl text-dark-blue font-bold'>Tüm Etkinlikler</h1>
		<div className='events-container mx-auto'>
			<div className="my-5 grid  md:grid-cols-3  auto-rows-auto  gap-5">
				{
					data.map((item) => {
						return <Event key={item.id} item={item} />
					})
				}

			</div>
		</div>
	</>
}

export default Events