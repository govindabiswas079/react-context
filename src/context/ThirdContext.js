// ThirdContext.js
import React, { createContext, useContext, useReducer } from 'react';

const ThirdContext = createContext();

export const ThirdContextProvider = ({ children }) => {
  const initialState = {
    count: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count++ };
      case 'DECREMENT':
        return { ...state, count: state.count-- };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThirdContext.Provider value={{ state, dispatch }}>
      {children}
    </ThirdContext.Provider>
  );
};

export const useThirdContext = () => useContext(ThirdContext);
