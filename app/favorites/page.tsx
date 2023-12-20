'use client';
import FavoriteTeaser from '@/components/FavoriteTeaser';
import { useFavorites } from '@/context/FavoritesContext';
import React from 'react';

const Favorites = () => {
	const { favorites } = useFavorites();
	console.log(favorites);
	return (
		<div>
			<h2>Your Favorites</h2>

			{favorites.map((item) => (
				<FavoriteTeaser key={item.title} {...item} />
			))}
		</div>
	);
};

export default Favorites;
