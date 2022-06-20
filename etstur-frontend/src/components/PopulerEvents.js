import React from 'react'
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import PopulerSlide from './PopulerSlide';
import placeholder from '../assets/placeholder.png'


const PopulerEvents = () => {

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
			}
			} >
				<PopulerSlide title="Konser 1" img={placeholder} />
				<PopulerSlide title="Sergi 1" img={placeholder} />
				<PopulerSlide title="Tiyatro 1" img={placeholder} />
				<PopulerSlide title="Futbol 1" img={placeholder} />
				<PopulerSlide title="Konser 2" img={placeholder} />
				<PopulerSlide title="Sergi 2" img={placeholder} />

			</Splide>
		</div >
	</>
}

export default PopulerEvents