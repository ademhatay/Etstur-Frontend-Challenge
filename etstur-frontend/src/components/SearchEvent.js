import React, { useContext, useState } from 'react'
import SiteContext from '../context/SiteContext'
import Event from './Event'

const SearchEvent = () => {
	const data = useContext(SiteContext)

	const [value, setvalue] = useState('');

	const submitHandler = (e) => {
		e.preventDefault()

	}

	const changeHandler = (e) => {
		setvalue(e.target.value)
	}

	const getOne = () => {
		return (
			<>
				<p className='text-white text-center text-xl w-full'>
					SearchBar'ımız şu an hizmet verememekte. Lütfen etkinlik listesinden size uygun olanı seçiniz. (Girdiğiniz değerleri de silersiniz iyi olur :))
				</p>
			</>
		)
	}


	return <>
		<div className='container px-10 md:w-2/3 mx-auto'>
			<form>
				<div className="relative">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
					</div>
					<input onChange={changeHandler} type="search" id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Etkinlik Ara..." required />
					<button onClick={submitHandler} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-dark-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Etkinlik Ara</button>
				</div>
			</form>
		</div>
		<h1 className='mt-10 px-10 text-2xl text-dark-blue font-bold'>Tüm Etkinlikler</h1>
		<div className='events-container mx-auto'>
			<div id='events' className="my-5 grid  md:grid-cols-3  auto-rows-auto  gap-5">
				{
					value === '' ?
					data.map((item) => {
						return <Event key={item.id} item={item} />
					}) : getOne()
				}

			</div>
		</div>
	</>
}

export default SearchEvent