import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { LEGOProvider } from "./context/legoContext";

ReactDOM.render(
  <React.StrictMode>
    <LEGOProvider>
      <App />
    </LEGOProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
