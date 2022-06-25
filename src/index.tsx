import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './animation.css';
import App from './App';
import reportWebVitals from './config/reportWebVitals';
import {Sandbox} from "./component/sandbox/sandbox";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FormGenerateZoo} from "./component/form-generate-zoo/form-generate-zoo";
import Home from "./component/home/home";
import Draft from "./component/draft/draft";
import Game from "./component/game/game";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/draft" element={<Draft />} />
            <Route path="/game" element={<Game />} />
            {/*OLD*/}
            <Route path="/sandbox" element={<Sandbox />} />
            <Route path="/animals" element={<Sandbox />} />
            <Route path="/history" element={<Sandbox />} />
            <Route path="/generate-zoo" element={<FormGenerateZoo />} />
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
