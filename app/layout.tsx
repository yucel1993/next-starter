/* Globale Styles, die auf allen Seiten geladen werden.
Wenn man größere Mengen spezifischer Styles hat, kann man
auch in einzelnen page- bzw. Komponenten-Dateien css importieren.
*/
import { Caveat } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Toaster, toast } from 'sonner';
import '@/css/style.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DarkModeProvider } from '@/context/colorContext';
import { Metadata } from 'next';
import DemoCarousel2 from '@/components/DemoCaraouse';
import { FavoritesProvider } from '@/context/FavoritesContext';

const caveat = Caveat({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Cars',
	description: 'Eine Next-Website',
	icons: [{ url: '/logo.jpeg', type: 'image/svg+xml' }],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<DarkModeProvider>
			<FavoritesProvider>
				<html lang="en">
					<body className={caveat.className}>
						<Header />
						<div className="site-wrapper">
							<NextTopLoader color="orange" />
							<div className="site-content">{children}</div>
						</div>
						<DemoCarousel2 />
						<Footer />
					</body>
				</html>
			</FavoritesProvider>
		</DarkModeProvider>
	);
}
