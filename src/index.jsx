import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);