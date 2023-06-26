import React from "react";
import ReactDOMClient from "react-dom/client";
import { UralAtomMainPage } from "./screens/UralAtomMainPage";
import { ZayavkaPage } from "./screens/ZayavkaPage";
import { Kontaktnaya } from "./screens/Kontaktnaya";
import { ONasPage } from "./screens/ONasPage";
import { KatalogProduksii } from "./screens/KatalogProduksii";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<UralAtomMainPage />);
//тут рендер страницы
