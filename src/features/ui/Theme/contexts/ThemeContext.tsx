import { createContext } from 'react';

type ThemeContextType = {
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export default ThemeContext;
