'use client';

import { useFavorites } from '@/context/FavoritesContext';
import Image from 'next/image';
type Prop = {
	title: string;
	featuredImage: {
		node: {
			sourceUrl?: string;
		};
	};
};
export default function FavoriteTeaser({ title, featuredImage }: Prop) {
	const { removeFavorite } = useFavorites();
	return (
		<article className="product-teaser">
			<>
				<div>
					<h2 style={{ textAlign: 'center' }}>
						<strong>{title} </strong>
					</h2>
					<Image
						width={400}
						height={400}
						className="product-teaser__image"
						sizes="(max-width: 20rem) 90vw,  54rem"
						src={featuredImage.node.sourceUrl}
						alt="png"
					/>
				</div>
				<button className="colorful" onClick={() => removeFavorite(title)}>
					Remove Favorite
				</button>
			</>
		</article>
	);
}
