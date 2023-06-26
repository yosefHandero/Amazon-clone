import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {  BrowserRouter } from "react-router-dom";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>
    
);

