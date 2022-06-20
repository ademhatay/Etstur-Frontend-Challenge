import React from 'react'
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import placeholder from '../assets/placeholder.png'
import DetailSlider from './DetailSlider';


const DetailHeader = () => {
	return <>
		<div className='mt-32 md:mt-24 mb-5 md:mx-12 mx-6'>
			<p className='text-xl font-bold'>Anasayfa / Etkinlik Adı</p>
			<div className='sliderWrapper w-2/4 !my-0'>
				<Splide options={{
					gap: 30,
					perPage: 1,
					arrows: false,
				}}>
					<DetailSlider img={placeholder} />
					<DetailSlider img={placeholder} />
					<DetailSlider img={placeholder} />
					<DetailSlider img={placeholder} />
					<DetailSlider img={placeholder} />

				</Splide>
			</div>
		</div>
	</>
}

export default DetailHeader