import React, { useState } from 'react'
import Hamburger from '../assets/Hamburger.svg'
import Account from '../assets/Account.svg'
import Close from '../assets/Close.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const mobileToggler = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true)

		let mobileMenu = document.querySelector('.mobile-wrapper');
		let menu = document.querySelector('.menu');

		mobileMenu.classList.toggle("opened");
		menu.classList.toggle("open-menu");
	}
	return <>
		<nav>
			<div className='nav-container w-full h-16 bg-light-green fixed top-0'>
				<a href="/" className='nav-logo w-24 h-20 p-3 bg-orange-600 rounded-2xl absolute top-5 left-1/2'>
					<h1 className='logo text-xl text-center'>Etkinlik APP</h1>
				</a>
				{/* MediaQuery:1000px display none .menu */}
				<ul className='menu h-full flex justify-evenly  items-center mx-auto'>
					<li className='list-item'><NavLink to="/">Anasayfa</NavLink></li>
					<li className='list-item'><NavLink to="/detail">Etkinlikler</NavLink></li>
					<li className='list-item'><NavLink to="/">Popüler</NavLink></li>
					<li className='list-item'><NavLink to="/">Giriş / Kayıt</NavLink></li>
				</ul>
				<div className='mobile h-full justify-between  items-center px-10'>
					<img src={Account} alt='Account' className='cursor-pointer w-12 h-12' />
					{/* UseState used for change close icon to Hamburger */}
					<img id="hamburger" src={isOpen ? Close : Hamburger} onClick={mobileToggler} alt='Hamburger' className='cursor-pointer w-12 h-12' />
				</div>
				{/* .wrapper position left -100%, when click toggle left 0 */}
				<div className='mobile-wrapper'></div>
			</div>
		</nav>
	</>
}

export default Navbar