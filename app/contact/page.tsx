'use client';

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
	const [state, handleSubmitForm] = useForm('xzbnprpv'); // Replace with your Formspree form ID
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		message: '',
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { username, email, message } = formData;

	const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const formSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		setLoading(true);

		// const contact = {
		// 	_type: 'contact',
		// 	name: formData.username,
		// 	email: formData.email,
		// 	message: formData.message,
		// };

		// Perform any additional logic you need for form submission
		// For Formspree, use handleSubmitForm() to handle the form submission
		await handleSubmitForm(e);

		setLoading(false);
		setIsFormSubmitted(true);
	};

	if (state.succeeded || isFormSubmitted) {
		return (
			<div>
				<h3 className="head-text">Thank you for getting in touch!</h3>
			</div>
		);
	}

	return (
		<>
			<h2 className="head-text">Take a coffee & chat with me</h2>

			<div className="app__footer-cards">
				<div className="app__footer-card ">
					{/* <img src={images.email} alt="email" /> */}
					<a href="mailto:hello@micael.com" className="p-text">
						alpagut1993@gmail.com
					</a>
				</div>
				<div className="app__footer-card">
					{/* <img src={images.mobile} alt="phone" /> */}
					<a href="tel:+49 1637879999" className="p-text">
						+49 163 787 9999
					</a>
				</div>
			</div>

			<form onSubmit={formSubmit} className="app__footer-form app__flex">
				<div className="app__flex">
					<input
						className="p-text"
						type="text"
						placeholder="Your Name"
						name="username"
						value={username}
						onChange={handleChangeInput}
					/>
				</div>
				<div className="app__flex">
					<label htmlFor="email"></label>
					<input
						id="email"
						type="email"
						name="email"
						placeholder="Your Email"
						value={email}
						onChange={handleChangeInput}
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
				</div>
				<div>
					<textarea
						className="p-text"
						placeholder="Your Message"
						value={message}
						name="message"
						// @ts-ignore
						onChange={handleChangeInput}
					/>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
				</div>
				<button
					type="submit"
					className="p-text"
					disabled={state.submitting || loading}
				>
					{state.submitting || loading ? 'Sending...' : 'Send Message'}
				</button>
			</form>
		</>
	);
};

export default Contact;
