import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root");

// Define your app structure once to keep things clean
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// The Logic:
// If the root div has children, it means react-snap filled it with HTML -> Use Hydrate
// If it's empty, it's a normal load -> Use Render
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  const root = createRoot(container);
  root.render(app);
}
