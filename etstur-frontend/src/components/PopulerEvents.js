import React from 'react'
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import PopulerSlide from './PopulerSlide';
const PopulerEvents = () => {

	Splide.defaults = {
		type: 'loop',
		perPage: 2,
	}

	return <>
		<h1 className='mt-44 px-10 text-2xl text-dark-blue font-bold'>Popüler Etkinlikler</h1>
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
			}
			} >
				<PopulerSlide />
				<PopulerSlide />
				<PopulerSlide />
				<PopulerSlide />
				<PopulerSlide />
				<PopulerSlide />

			</Splide>
		</div >
	</>
}

export default PopulerEvents