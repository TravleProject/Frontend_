import React from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.jsx";
import "./index.css";

// import { worker } from "./mocks/brower.js";
// if (import.meta.env.NODE_ENV !== "development") {
//   worker.start();
// }

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
);
