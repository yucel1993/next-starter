'use client';
import React, { createContext, useContext, useState } from 'react';

// Define the context
type DarkModeContextType = {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(
	undefined
);

// Custom hook to use the DarkModeContext
export const useDarkMode = () => {
	const context = useContext(DarkModeContext);
	if (!context) {
		throw new Error('useDarkMode must be used within a DarkModeProvider');
	}
	return context;
};

// Dark Mode Provider component
export const DarkModeProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	// Function to toggle between dark and light mode
	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};
