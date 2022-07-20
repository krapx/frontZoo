import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './common/animation.css';
import App from './App';
import {Sandbox} from "./component/old/sandbox/sandbox";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FormGenerateZoo} from "./component/old/form-generate-zoo/form-generate-zoo";
import Home from "./component/home/home";
import Draft from "./component/draft/draft";
import Game from "./component/game/game";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
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
);
