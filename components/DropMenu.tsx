'use client';
import { useToggle } from '@/lib/hooks/useToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CgCloseO, CgMenuRound } from 'react-icons/cg';

/* Hier noch den Typ LinkTarget erstellen und sicherstellen,
dass die Objekte in linkTargets diesem Typ entsprechen. */

type LinkTarget = {
	text: string;
	url: string;
};

const links = [
	{ url: '/', text: 'Main' },
	{ url: '/cars', text: 'Cars' },
	{ url: '/contact', text: 'Contact' },
	{ url: '/about', text: 'About' },
];

/*
Barrierefreies Menü:
https://inclusive-components.design/menus-menu-buttons/
*/

export default function MainNavigation() {
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
		<nav className={showMenu ? 'main-navigation' : 'main-navigation-close'}>
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

	return linkTargets.map(({ text, url }) => (
		<li key={url}>
			<Link
				href={url}
				className={`main-navigation__link ${
					pathname === url ? 'main-navigation__link--current' : ''
				}  `}
				onClick={handleLinkClick}
			>
				{text}
			</Link>
		</li>
	));
}
