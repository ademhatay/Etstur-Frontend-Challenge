import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
	<div className="my-56 text-center">
		Aradığınız Sayfa Bulunamadı
		<br /> <br />
		<NavLink to="/">Ana Sayfaya Gitmek İçin Buraya Tıklayın</NavLink>
	</div>
  )
}

export default NotFound