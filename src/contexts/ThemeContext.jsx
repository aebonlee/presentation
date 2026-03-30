import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const COLORS = ['blue', 'teal', 'purple', 'emerald', 'gold'];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('prs_themeMode');
    return saved || 'light';
  });

  const [color, setColor] = useState(() => {
    const saved = localStorage.getItem('prs_colorTheme');
    return saved || 'blue';
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'auto') {
      const hour = new Date().getHours();
      root.setAttribute('data-theme', hour >= 6 && hour < 18 ? 'light' : 'dark');
    } else {
      root.setAttribute('data-theme', theme);
    }

    localStorage.setItem('prs_themeMode', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-color', color);
    localStorage.setItem('prs_colorTheme', color);
  }, [color]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'auto';
      return 'light';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, color, setColor, COLORS }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
