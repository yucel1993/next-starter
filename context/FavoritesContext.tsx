'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the type for favorite items
type FavoriteItem = {
	title: string;
	featuredImage: {
		node: {
			sourceUrl?: string;
			mediaItemUrl?: string;
		};
	};
};

type Prop = {
	children: React.ReactNode;
};

//! Define the type for the context value
type FavoritesContextType = {
	favorites: FavoriteItem[];
	addFavorite: (newFavorite: FavoriteItem) => void;
	removeFavorite: (title: string) => void;
};

//! Create a new context for managing favorites
const FavoritesContext = createContext<FavoritesContextType>({
	favorites: [],
	addFavorite: () => {},
	removeFavorite: () => {},
});

//! Custom hook to access the FavoritesContext
export const useFavorites = (): FavoritesContextType => {
	return useContext(FavoritesContext);
};

//! Favorites Provider component
export const FavoritesProvider = ({ children }: Prop) => {
	//! Load favorites from local storage or initialize as an empty array

	const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

	useEffect(() => {
		try {
			const initialFavorites = JSON.parse(
				localStorage.getItem('favorites') ?? ''
			) as FavoriteItem[];
			console.log(initialFavorites);
			setFavorites(initialFavorites);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const addFavorite = (newFavorite: FavoriteItem) => {
		const isExisting = favorites.some(
			(favorite) => favorite.title === newFavorite.title
		);

		if (!isExisting) {
			const updatedFavorites = [...favorites, newFavorite];
			setFavorites(updatedFavorites);
			localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
		} else {
			console.log('This favorite already exists in favorites!');
		}
	};

	// Function to remove a favorite by title
	const removeFavorite = (title: string) => {
		const updatedFavorites = favorites.filter(
			(favorite) => favorite.title !== title
		);
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
		setFavorites(updatedFavorites);
	};

	return (
		<FavoritesContext.Provider
			value={{ favorites, addFavorite, removeFavorite }}
		>
			{children}
		</FavoritesContext.Provider>
	);
};
