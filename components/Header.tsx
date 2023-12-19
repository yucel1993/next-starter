'use client';
import { FaRegSun } from 'react-icons/fa';
import { MdNightlight } from 'react-icons/md';
import Link from 'next/link';
import MainNavigation from './DropMenu';
import { useDarkMode } from '@/context/colorContext';
import React from 'react';
import Image from 'next/image';

const Header = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	React.useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
	}, [isDarkMode]);

	return (
		<header className="header">
			<div className="header-left">
				<Link href="/">
					<Image
						src="/logo.jpeg"
						alt="logo"
						width={20}
						height={20}
						style={{ borderRadius: '2px' }}
					/>
				</Link>
			</div>

			<div className="header-right">
				<div>
					<Link href="/">Main</Link>
				</div>

				<div>
					<Link href="/cars">Cars</Link>
				</div>

				<div>
					<Link href="/about">About</Link>
				</div>
				<div>
					<Link href="/contact">Contact</Link>
				</div>
			</div>
			<div>
				<button
					onClick={() => toggleDarkMode()}
					className={isDarkMode ? 'button-darkmode' : 'button-daymode'}
				>
					{isDarkMode ? <MdNightlight /> : <FaRegSun />}
				</button>
			</div>
			<div className="header-right-drop">
				<MainNavigation />
			</div>
		</header>
	);
};

export default Header;
