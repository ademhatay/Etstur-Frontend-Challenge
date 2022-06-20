import React from 'react'

const Footer = () => {
  return <>
	<footer className='p-5 bg-light-green flex justify-around flex-wrap items-center'>
		<ul>
			<li>Anasayfa</li>
			<li>Etkinlikler</li>
			<li>Kategoriler</li>
		</ul>
		<p>This Project Made With Love.</p>
		<a href='https://ademhatay.com' target={"_blank"}>www.<b>ademahatay</b>.com</a>
	</footer>
  </>
}

export default Footer