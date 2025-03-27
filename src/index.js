import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { HelmetProvider } from "react-helmet-async";
import GraceHeader from './GraceHome/Header';
import GraceHome from './GraceHome/GraceHome';
import GracePaper from './GracePaper/GracePaper';
import EuroCleanTech from './EuroCleanTech/EuroCleanTech';
import GraceAssociate from './GraceAssociate/GraceAssociate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GraceHome />} />
        <Route path="/gracepaperbags" element={<GracePaper />} />
        <Route path="/eurocleantech" element={<EuroCleanTech />} />
        <Route path="/graceassociates" element={<GraceAssociate />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
