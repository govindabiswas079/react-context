// SecondContext.js
import React, { createContext, useState, useContext } from 'react';

const SecondContext = createContext();

export const SecondContextProvider = ({ children }) => {
  const [secondValue, setSecondValue] = useState("Initial Value");

  return (
    <SecondContext.Provider value={{ secondValue, setSecondValue }}>
      {children}
    </SecondContext.Provider>
  );
};

export const useSecondContext = () => useContext(SecondContext);
