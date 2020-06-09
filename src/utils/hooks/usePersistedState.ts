import { useState, useEffect } from "react";
import { DefaultTheme } from "styled-components";
import { light, dark } from "../../styles/themes";

export const usePersistedState = (key: string, initialState: DefaultTheme) => {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  const changeTheme = () => {
    setTheme(theme.title === "Light" ? light : dark);
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);
  return { theme, changeTheme };
};
