import React from 'react'
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import PopulerSlide from './PopulerSlide';
import { useContext } from 'react'
import SiteContext from '../context/SiteContext'

const PopulerEvents = () => {
	const data = useContext(SiteContext)
	return <>
		<h1 className='mt-32 md:mt-24 px-10 text-2xl text-dark-blue font-bold'>Popüler Etkinlikler</h1>
		<div className='sliderWrapper'>
			<Splide options={{
				gap: 30,
				perPage: 3,
				arrows: false,
				breakpoints: {
					1000: {
						perPage: 2,
						arrows: true,
					},
					640: {
						perPage: 1,
					}
				}
			}} >

				{data.map((item) => {
					return <PopulerSlide key={item.id} item={item} />
				})}
		

			</Splide>
		</div >
	</>
}

export default PopulerEvents