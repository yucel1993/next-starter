'use client';

import Link from 'next/link';
import MainNavigation from './DropMenu';

const Header = () => {
	return (
		<header className="header">
			<div className="header-left">Logo</div>

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
			<div className="header-right-drop">
				<MainNavigation />
			</div>
		</header>
	);
};

export default Header;
