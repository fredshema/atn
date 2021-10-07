import React from "react";
import routes from "./router/index.js";

import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";

import "./styles/main.scss";

function App() {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
}

export default App;
