'use client';
import { FaCarAlt, FaRegSun } from 'react-icons/fa';
import {
	MdContactPhone,
	MdNightlight,
	MdOutlineFavorite,
} from 'react-icons/md';
import Link from 'next/link';
import MainNavigation from './DropMenu';
import { useDarkMode } from '@/context/colorContext';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoHome } from 'react-icons/io5';
import { FaClipboardQuestion } from 'react-icons/fa6';

const links = [
	{ url: '/', text: 'Main', icon: <IoHome /> },
	{ url: '/cars', text: 'Cars', icon: <FaCarAlt /> },
	{ url: '/favorites', text: 'Favorites', icon: <MdOutlineFavorite /> },
	{ url: '/contact', text: 'Contact', icon: <MdContactPhone /> },
	{ url: '/about', text: 'About', icon: <FaClipboardQuestion /> },
];

const Header = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	const pathname = usePathname();
	console.log('pathname', pathname);

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
				{links.map((item) => (
					<div key={item.text}>
						<Link
							className={
								item.url === pathname ? 'header-div-color' : 'normal-link'
							}
							href={item.url}
						>
							{item.icon} {item.text}
						</Link>
					</div>
				))}
			</div>
			<div>
				<button
					onClick={() => toggleDarkMode()}
					className={isDarkMode ? 'button-darkmode' : 'button-daymode'}
				>
					{isDarkMode ? <MdNightlight /> : <FaRegSun color="white" />}
				</button>
			</div>
			<div className="header-right-drop">
				<MainNavigation />
			</div>
		</header>
	);
};

export default Header;
