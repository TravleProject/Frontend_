import React from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App.jsx";
import "./index.css";

// import { worker } from "./mocks/brower.js";
// if (import.meta.env.NODE_ENV !== "development") {
//   worker.start();
// }

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <GoogleOAuthProvider
    clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENTID}
    onScriptLoadSuccess={() => console.log("성공")}
    onScriptLoadError={() => console.log("실패")}
  >
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </GoogleOAuthProvider>,
);
