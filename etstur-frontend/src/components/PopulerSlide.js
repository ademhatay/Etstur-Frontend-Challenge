import React from 'react'
import { SplideSlide } from '@splidejs/react-splide';

const PopulerSlide = (props) => {
	return (
		<SplideSlide>
			<div className='card space-y-4'>
				<img src={props.img} className='mx-auto border-1 rounded-md' alt="img-description"/>
				<div id="slide-description">
					<p className="text-center text-2xl">{props.title}</p>
					<p className='text-center'>Açıklama Alanı</p>
				</div>
				<button className='bg-dark-blue text-white w-full py-3 mx-auto'>Detay</button>
			</div>
		</SplideSlide>
	)
}

export default PopulerSlide