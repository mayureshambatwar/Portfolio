import { createContext, useState } from "react";

export const ToggleContext = createContext();

export default function ToggleProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  function toggleThemeColor() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ToggleContext.Provider value={{ theme, toggleThemeColor }}>
      {children}
    </ToggleContext.Provider>
  );
}
