// FirstContext.js
import React, { createContext, useState, useContext } from 'react';

const FirstContext = createContext();

export const FirstContextProvider = ({ children }) => {
  const [firstValue, setFirstValue] = useState("Initial Value");

  return (
    <FirstContext.Provider value={{ firstValue, setFirstValue }}>
      {children}
    </FirstContext.Provider>
  );
};

export const useFirstContext = () => useContext(FirstContext);
