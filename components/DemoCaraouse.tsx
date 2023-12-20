'use client';
import React, { useEffect, useState } from 'react';
import CookiePolicyModal from './cookiesPolicyModel';

const DemoCarousel2 = () => {
	const [showCookiesModal, setShowCookiesModal] = useState(true);

	useEffect(() => {
		const localStorage2 = localStorage.getItem('cookiesAccepted');
		if (localStorage2) {
			setShowCookiesModal(false);
		}
	}, []);

	return (
		<div id="demo-carousel-container">
			{/* Your carousel content */}
			{/* ... */}

			{showCookiesModal && (
				<CookiePolicyModal setShowCookiesModal={setShowCookiesModal} />
			)}
		</div>
	);
};

export default DemoCarousel2;
