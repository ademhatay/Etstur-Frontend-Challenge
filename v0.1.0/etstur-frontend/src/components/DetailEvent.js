import React from 'react'

const DetailEvent = ({ name, description, date, location, price, category }) => {
	const d = new Date();
	let year = d.getFullYear();
	const shareTwitter = () => {
		const twitterUrl = `https://twitter.com/intent/tweet?text=${name} -  ${date} - ${location}`;
		window.open(twitterUrl, '_blank');
	}
	return <>
		<div className='flex flex-col items-center'>
			<p>
				Tarih: {year <= date ? date : <>Geçti!! bu etkinlik {date} yılında bitti</>}
			</p>
			<p>Mekan: {location}</p>
			<p>Fiyat: {price} TL</p>
			<p>Kategori: {category}</p>
			<button onClick={shareTwitter} className='btn my-5 !w-36 '>Paylaş</button>
		</div>

	</>
}

export default DetailEvent