import { useMemo, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import defaultTheme from '../defaultTheme';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const values = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}
