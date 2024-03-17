import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import { FirstContextProvider } from './context/FirstContext';
import { SecondContextProvider } from './context/SecondContext';
import { ThirdContextProvider } from './context/ThirdContext';
import MyComponent from './MyComponent';
import { ThemeProvider } from './context/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstContextProvider>
      <SecondContextProvider>
        <ThirdContextProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
          {/* <MyComponent /> */}
        </ThirdContextProvider>
      </SecondContextProvider>
    </FirstContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
