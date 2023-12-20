'use client';

import React, { useState } from 'react';

type Prop = {
	setShowCookiesModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const CookiePolicyModal = ({ setShowCookiesModal }: Prop) => {
	const [cookiesAccepted, setCookiesAccepted] = useState(false);

	const handleAcceptCookies = () => {
		// Handle setting the cookiesAccepted state to true
		setCookiesAccepted(true);
		setShowCookiesModal(false);
		// You can also save this value in localStorage or a state management solution like Redux
		// localStorage.setItem('cookiesAccepted', true);
	};

	const handleRejectCookies = () => {
		// Handle actions if user rejects cookies (freeze page or any other action)
		// For example, you could disable certain functionalities until cookies are accepted
		console.log('Cookies rejected');
		// Optionally, you might want to handle what happens when cookies are rejected
	};

	const modalStyles = {
		width: '20%',
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: '#fff',
		padding: '20px',
		zIndex: 9999,
	};

	return (
		<div style={modalStyles}>
			<h2>Cookies Policy</h2>
			<p>
				This website uses cookies to improve user experience. Do you accept?
			</p>
			<button onClick={handleAcceptCookies}>Yes</button>
			<button onClick={handleRejectCookies}>No</button>
		</div>
	);
};

export default CookiePolicyModal;
