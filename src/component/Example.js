import React, { createContext, useContext, useReducer } from 'react';

// Step 1: Create Context
const ThemeContext = createContext();

// Step 2: Create Reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

// Step 3: Create Provider Component
const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    theme: 'light'
  });

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Step 4: Create Custom Hook to Access Context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Child Component
const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
        color: theme === 'light' ? '#000000' : '#ffffff'
      }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};

// Parent Component
const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Switcher</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
};

export default App;
