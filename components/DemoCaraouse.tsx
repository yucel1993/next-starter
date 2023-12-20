'use client';
import React, { useState } from 'react';
import CookiePolicyModal from './cookiesPolicyModel';

const DemoCarousel2 = () => {
	const [showCookiesModal, setShowCookiesModal] = useState(true);

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
