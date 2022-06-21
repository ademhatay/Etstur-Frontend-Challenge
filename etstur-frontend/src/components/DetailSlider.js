import React from 'react'
import { SplideSlide } from '@splidejs/react-splide';


const DetailSlider = (props) => {
	return <>
		<SplideSlide>
			<img style={{ width: '100%', height: 250, objectFit: 'contain' }} src={props.img} alt="img" />
		</SplideSlide>
	</>
}

export default DetailSlider