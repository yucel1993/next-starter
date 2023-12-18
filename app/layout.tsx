/* Globale Styles, die auf allen Seiten geladen werden.
Wenn man größere Mengen spezifischer Styles hat, kann man
auch in einzelnen page- bzw. Komponenten-Dateien css importieren.
*/
import { Caveat } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import '@/css/style.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const caveat = Caveat({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={caveat.className}>
				<Header />
				<div className="site-wrapper">
					<NextTopLoader color="orange" />
					<div className="site-content">{children}</div>
				</div>
				<Footer />
			</body>
		</html>
	);
}
