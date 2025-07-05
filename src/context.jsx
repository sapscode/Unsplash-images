import { useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const ContextProvider = ({ children }) => {
	const [isDarkTheme, setDarkTheme] = useState(false);
	const [search, setSearch] = useState("coding");

	const toggleDarkTheme = () => {
		const newTheme = !isDarkTheme;
		setDarkTheme(newTheme);
		const body = document.querySelector("body");
		body.classList.toggle("dark-theme", newTheme);
	};

	return (
		<GlobalContext.Provider
			value={{ isDarkTheme, toggleDarkTheme, search, setSearch }}
		>
			{children}
		</GlobalContext.Provider>
	);
};
export default ContextProvider;
