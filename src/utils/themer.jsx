import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    palette: {
      mode: 'dark',
    },
  });

  useEffect(() => {
    const interval = setInterval(() => setTheme(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemer() {
  return useContext(ThemeContext);
}
