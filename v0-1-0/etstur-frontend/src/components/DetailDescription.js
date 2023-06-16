import React from 'react'

const DetailDescription = ({ description }) => {
	return <>
		<p className='px-5 text-2xl '>Etkinlik Açıklaması</p>
		<p className='p-5 text-justify '>
			{description}
		</p>
	</>
}

export default DetailDescription