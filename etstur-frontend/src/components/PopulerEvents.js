import React from 'react'
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import PopulerSlide from './PopulerSlide';
const PopulerEvents = () => {

	Splide.defaults = {
		type: 'loop',
		perPage: 2,
	}

	return (
		<div className='sliderWrapper'>
			<Splide options={{
				gap: 30,
				perPage: 3,
				arrows: false,
				breakpoints: {
					1000: {
						perPage: 2
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
	)
}

export default PopulerEvents