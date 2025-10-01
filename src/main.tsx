import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./components/router/router";
import { Provider } from "./components/ui/provider";

import "./index.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider defaultTheme="light">
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
