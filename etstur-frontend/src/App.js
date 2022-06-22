import React from 'react'
import { Routes, Route } from "react-router-dom";
import EventDetail from './pages/EventDetail';
import Home from './pages/Home'
import data from './index.js';
import SiteContext from './context/SiteContext';
import NotFound from './pages/NotFound';


const App = () => {
	const data1 = "merhaba"
	return <>
		<SiteContext.Provider value={data}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="detail/:event" element={<EventDetail />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</SiteContext.Provider>
	</>
}


export default App