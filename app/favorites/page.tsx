'use client';
import FavoriteTeaser from '@/components/FavoriteTeaser';
import { useFavorites } from '@/context/FavoritesContext';
import Link from 'next/link';
import React from 'react';
import { Toaster } from 'sonner';

const Favorites = () => {
	const { favorites } = useFavorites();
	console.log(favorites);
	return (
		<div>
			<Toaster />
			<h2>Your Favorites</h2>

			{!(favorites.length > 0) ? (
				<div>
					<h2>It seems you dont have any favorite</h2>
					<Link href="/cars">
						<button className="favoriteButton">Add favorites</button>
					</Link>
				</div>
			) : (
				favorites.map((item) => <FavoriteTeaser key={item.title} {...item} />)
			)}
		</div>
	);
};

export default Favorites;
