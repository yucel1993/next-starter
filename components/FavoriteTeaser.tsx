'use client';

import { useFavorites } from '@/context/FavoritesContext';
import Image from 'next/image';
import { toast } from 'sonner';
type Prop = {
	title: string;
	featuredImage: {
		node: {
			sourceUrl?: string;
			mediaItemUrl?: string;
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

					{featuredImage.node.sourceUrl && (
						<Image
							width={400}
							height={400}
							className="product-teaser__image"
							sizes="(max-width: 20rem) 90vw,  54rem"
							src={featuredImage.node.sourceUrl}
							alt="png"
						/>
					)}
				</div>
				<button
					className="colorful"
					onClick={() => {
						toast('Removed from favorited');
						removeFavorite(title);
					}}
				>
					Remove Favorite
				</button>
			</>
		</article>
	);
}
