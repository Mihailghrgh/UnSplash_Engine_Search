import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(true);
  const [search, setSearch] = useState("Communist China");

  const toggleDarkTheme = () => {
    setDarkTheme(!isDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", isDarkTheme);
  };

  return (
    <AppContext.Provider
      value={{ isDarkTheme, search, setSearch, toggleDarkTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
