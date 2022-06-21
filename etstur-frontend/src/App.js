import React from 'react'
import { Routes, Route } from "react-router-dom";
import EventDetail from './pages/EventDetail';
import Home from './pages/Home'
import data from './index.js';
import SiteContext from './context/SiteContext';


const App = () => {
	return <>
		<SiteContext.Provider value={data}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="detail" element={<EventDetail />} />
			</Routes>
		</SiteContext.Provider>
	</>
}


export default App