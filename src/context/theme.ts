import { createContext } from 'react';

type Theme = 'light' | 'dark';

const initialState: Theme = 'light';

export const ThemeContext = createContext<Theme>(initialState);

export const ThemeProvider = ThemeContext.Provider;
