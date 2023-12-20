'use client';
import { useDarkMode } from '@/context/colorContext';
import { useToggle } from '@/lib/hooks/useToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CgCloseO, CgMenuRound } from 'react-icons/cg';
import { IoHome } from 'react-icons/io5';
import { FaCarAlt } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';
import { FaClipboardQuestion } from 'react-icons/fa6';

/* Hier noch den Typ LinkTarget erstellen und sicherstellen,
dass die Objekte in linkTargets diesem Typ entsprechen. */

type LinkTarget = {
	text: string;
	url: string;
	icon: React.ReactNode;
};

const links = [
	{ url: '/', text: 'Main', icon: <IoHome /> },
	{ url: '/cars', text: 'Cars', icon: <FaCarAlt /> },
	{ url: '/contact', text: 'Contact', icon: <MdContactPhone /> },
	{ url: '/about', text: 'About', icon: <FaClipboardQuestion /> },
];

/*
Barrierefreies Menü:
https://inclusive-components.design/menus-menu-buttons/
*/

export default function MainNavigation() {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	const [showMenu, toggleMenu] = useToggle(false);
	const pathname = usePathname();
	// console.log(pathname);
	/* Wenn pathname sich ändert, soll das Menü geschlossen werden. */

	const handleLinkClick = () => {
		if (showMenu) {
			toggleMenu(); // Close the menu when a link is clicked
		}
	};
	return (
		<nav
			className={
				showMenu
					? isDarkMode
						? 'main-navigation-dark'
						: 'main-navigation'
					: 'main-navigation-close'
			}
		>
			<button
				onClick={toggleMenu}
				className="main-navigation__button"
				aria-label={showMenu ? 'Menü schließen' : 'Menü öffnen'}
				aria-expanded={showMenu}
			>
				Menü {showMenu ? <CgCloseO /> : <CgMenuRound />}
			</button>
			{showMenu && (
				<ul className="main-navigation__list">
					{/* Hier getMenuItems aufrufen und linkTargets übergeben */}
					{getMenuItems(links, pathname, handleLinkClick)}
				</ul>
			)}
		</nav>
	);
}

function getMenuItems(
	linkTargets: LinkTarget[],
	pathname: string,
	handleLinkClick: () => void
) {
	console.log(pathname);

	/* Alle Link-Elemente sollen die CSS-Klasse main-navigation__link
    erhalten, zusätzlich soll das Link-Element, das der aktuell angezeigten
    Seite entspricht, die Klasse main-navigation__link--current erhalten */

	return linkTargets.map(({ text, url, icon }) => (
		<li key={url}>
			<Link
				href={url}
				className={`main-navigation__link ${
					pathname === url ? 'main-navigation__link--current' : ''
				}  `}
				onClick={handleLinkClick}
			>
				<span className="icon">{icon}</span>
				{text}
			</Link>
		</li>
	));
}
