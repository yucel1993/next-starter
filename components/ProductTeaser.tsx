'use client';

import { useFavorites } from '@/context/FavoritesContext';
import { GraphCar } from '@/lib/types';

import Image from 'next/image';

import Link from 'next/link';
import { toast } from 'sonner';

export default function ProductTeaser({
	title,
	slug,
	featuredImage,
	id,
}: GraphCar) {
	const { addFavorite } = useFavorites();

	return (
		<article className="product-teaser">
			{featuredImage.node.mediaItemUrl ? (
				<Link href={`/cars/${slug}`}>
					<h2 style={{ textAlign: 'center' }}>{title}</h2>
					{/* <strong>{title} </strong> */}

					<Image
						width={400}
						height={400}
						className="product-teaser__image"
						sizes="(max-width: 20rem) 90vw,  54rem"
						src={
							featuredImage.node.mediaItemUrl ?? featuredImage.node.sourceUrl
						}
						alt="png"
					/>
				</Link>
			) : (
				<>
					<div className="car-container">
						<h2 style={{ textAlign: 'center' }}>
							<strong>{title} </strong>
						</h2>

						<Image
							width={400}
							height={400}
							className="product-teaser__image"
							sizes="(max-width: 20rem) 90vw,  54rem"
							src={
								featuredImage.node.mediaItemUrl ?? featuredImage.node.sourceUrl
							}
							alt="png"
						/>
					</div>
					<button
						className="colorful"
						onClick={() => {
							toast('Added to favorited');
							addFavorite({ title, featuredImage });
						}}
					>
						Add Favorite
					</button>
				</>
			)}
		</article>
	);
}
