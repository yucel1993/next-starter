'use client';
import React, { createContext, useContext, useState, FC } from 'react';

// Define the type for favorite items
type FavoriteItem = {
	title: string;
	featuredImage: {
		node: {
			sourceUrl?: string;
		};
	};
};

type Prop = {
	children: React.ReactNode;
};

// Define the type for the context value
type FavoritesContextType = {
	favorites: FavoriteItem[];
	addFavorite: (newFavorite: FavoriteItem) => void;
	removeFavorite: (idToRemove: string) => void;
};

// Create a new context for managing favorites
const FavoritesContext = createContext<FavoritesContextType>({
	favorites: [],
	addFavorite: () => {},
	removeFavorite: () => {},
});

// Custom hook to access the FavoritesContext
export const useFavorites = (): FavoritesContextType => {
	return useContext(FavoritesContext);
};

// Favorites Provider component
export const FavoritesProvider = ({ children }: Prop) => {
	const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

	// Function to add a new favorite
	const addFavorite = (newFavorite: FavoriteItem) => {
		// Check if the new favorite already exists in the favorites list
		const isExisting = favorites.some(
			(favorite) => favorite.title === newFavorite.title
		);

		if (!isExisting) {
			setFavorites([...favorites, newFavorite]);
		} else {
			console.log('This favorite already exists in favorites!');
		}
	};

	// Function to remove a favorite by ID
	const removeFavorite = (title: string) => {
		const updatedFavorites = favorites.filter(
			(favorite) => favorite.title !== title
		);
		setFavorites(updatedFavorites);
	};
	console.log(favorites);
	return (
		<FavoritesContext.Provider
			value={{ favorites, addFavorite, removeFavorite }}
		>
			{children}
		</FavoritesContext.Provider>
	);
};
