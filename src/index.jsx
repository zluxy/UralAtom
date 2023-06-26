import React from "react";
import ReactDOMClient from "react-dom/client";
import { UralAtomMainPage } from "./screens/UralAtomMainPage";
import { ONasPage } from "./screens/ONasPage";
import { KatalogProduksii } from "./screens/KatalogProduksii";
import { Kontaktnaya } from "./screens/Kontaktnaya";
import { ZayavkaPage } from "./screens/ZayavkaPage";
import { NovostiPage } from "./screens/NovostiPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<NovostiPage />);
