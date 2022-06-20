import React from 'react'
import placeholder from '../assets/placeholder.png'
import { SplideSlide } from '@splidejs/react-splide';

const PopulerSlide = () => {
	return (
		<SplideSlide>
			<div className='card'>
				<img src={placeholder} className='mx-auto border-1' alt="img-description"/>
				<div id="slide-description">
					<p className="text-center text-2xl">Event Title</p>
					<p className='text-center'>Açıklama Alanı</p>
				</div>
				<button className='bg-dark-blue text-white w-full py-3 mx-auto'>Detay</button>
			</div>
		</SplideSlide>
	)
}

export default PopulerSlide