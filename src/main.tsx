import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./components/router/router";
import { Provider } from "./components/ui/provider";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import client from "./components/router/queryClient";
import { Toaster } from "./components/ui/toaster";

import "./index.css";
import "./calender.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider defaultTheme="dark">
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
