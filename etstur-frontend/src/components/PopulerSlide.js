import React from 'react'
import { SplideSlide } from '@splidejs/react-splide';

const PopulerSlide = ({ item }) => {

	return <>
		{
			item.isPopular === true ?  (
		<SplideSlide>
			<div className='card space-y-4'>
				<img
					src={
						item.eventImages.length == 0 ? item.defaultImage : item.eventImages[0]
					}
					className='mx-auto border-1 rounded-md' alt="img-description" />
				<div id="slide-description">
					<p className="text-center text-2xl">{item.eventName}</p>
					<p className='text-center'>
						{
							item.eventDescription.length >= 26 ? item.eventDescription.substring(0, 26) + '...' : item.eventDescription
						}
					</p>
				</div>
				<button className='bg-dark-blue text-white w-full py-3 mx-auto'>Detay</button>
			</div>
		</SplideSlide>
		) : <></>
		}

	</>
}

export default PopulerSlide