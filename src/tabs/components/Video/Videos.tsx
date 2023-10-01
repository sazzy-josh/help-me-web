import React from 'react';
import VideoCard from './VideoCard';

const videos = [
	{
		videoUrl: 'https://example.com/video1.mp4',
		title: 'How to create Facebook Ad listing',
		date: 'SEPTEMBER 23, 2023',
	},
	{
		videoUrl: 'https://example.com/video2.mp4',
		title: 'How to create Facebook Ad listing',
		date: 'SEPTEMBER 23, 2023',
	},
	{
		videoUrl: 'https://example.com/video3.mp4',
		title: 'How to create Facebook Ad listing',
		date: 'SEPTEMBER 23, 2023',
	},
	// Add more video objects as needed
];

const VideoGallery = () => {
	return (
		<main className='my-10 p-4 px-4 lg:px-16 xl:px-36'>
			<h2 className='text-[#141414CC] font-semibold text-lg mb-4'>Recent Videos</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
				{videos.map((video, index) => (
					<VideoCard video={video} key={index} />
				))}
			</div>
		</main>
	);
};

export default VideoGallery;
