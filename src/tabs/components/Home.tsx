import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './Features';
import HowItWorks from './HowItWorks';
import Navbar from './Navbar';
import Footer from './Footer';
export default function Home() {
	return (
		<div className=''>
			<Navbar />
			<section className='divide-y-[60px] divide-[#F4F6F8] p-4 px-4 lg:px-16 xl:px-30 '>
				<HeroSection />
				<FeaturesSection />
				<HowItWorks />
			</section>
			<Footer />
		</div>
	);
}
