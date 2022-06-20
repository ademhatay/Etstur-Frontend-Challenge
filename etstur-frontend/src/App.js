import React from 'react'
import { Routes, Route } from "react-router-dom";
import EventDetail from './pages/EventDetail';
import Home from './pages/Home'

const App = () => {
	return <>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="detail" element={<EventDetail />} />
		</Routes>
	</>
}

export default App