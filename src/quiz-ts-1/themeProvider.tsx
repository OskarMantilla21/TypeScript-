import React, { createContext, useContext, ReactNode } from 'react';

interface ThemeContextProps {
  theme: 'dark' | 'light';
  children: ReactNode;
}

const ThemeContext = createContext<{ theme: 'dark' | 'light' } | undefined>(undefined);

const ThemeProvider: React.FC<ThemeContextProps> = ({ theme, children }) => {
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return themeContext.theme;
};

const ThemeConsumer: React.FC = () => {
  const theme = useTheme();
  return (
    <div>
      <h2>Theme Consumer</h2>
      <p>Current Theme: {theme}</p>
    </div>
  );
};


export { ThemeProvider, ThemeConsumer, useTheme };