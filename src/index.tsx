import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './animation.css';
import App from './App';
import reportWebVitals from './config/reportWebVitals';
import {Home} from "./component/home/home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/animals" element={<Home />} />
            <Route path="/history" element={<Home />} />
        </Routes>
    </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
