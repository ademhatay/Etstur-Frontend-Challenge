import React from 'react'
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import DetailSlider from './DetailSlider';
import { Link } from 'react-router-dom';

const DetailHeader = ({ name, img }) => {
	if (img.length === 0) {
		return (
			<div className='mt-32 md:mt-24 mb-5 md:mx-12 mx-6'>
				Bu Etkinlik İçin Resim Bulunamadı!!!!
			</div>
		)
	}
	else {
		return <>
			<div className='mt-32 md:mt-24 mb-5 md:mx-12 mx-6'>
				<p className='text-xl font-bold'>
					<Link className='underline' to={'/'}>Anasayfa</Link> / {name}</p>
				<div className='sliderWrapper w-2/4 !my-0'>
					<Splide options={{
						gap: 30,
						perPage: 1,
						arrows: false,
					}}>
						{
							img.map((item, index) => {
								return (
									<DetailSlider key={index
									} img={item} />
								)
							})
						}

					</Splide>
				</div>
			</div>
		</>
	}
}



export default DetailHeader