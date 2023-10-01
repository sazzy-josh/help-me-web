import './tabs.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ScreenRecoder from './components/screenrecoder';
import Completed from './components/Completed';
import VideoGallery from './components/Video/Videos';
import VideoLists from './components/VideoLists';

function Tabs() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<ScreenRecoder />} />
				<Route path='/home' element={<Home />} />
				<Route path='/helpmeout' element={<ScreenRecoder />} />
				<Route path='/screenrecorder' element={<ScreenRecoder />} />
				<Route path='/recent-videos' element={<VideoLists />} />
				<Route path='/completed/:id' element={<Completed />} />
			</Routes>
		</div>
	);
}

export default Tabs;
