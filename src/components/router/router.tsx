import { createBrowserRouter, Navigate } from "react-router";
import FormLayout from "../layouts/FormLayout";
import LoginPage from "../pages/LoginPage";
import AdminLayout from "../layouts/AdminLayout";
import PropertiesPage from "../pages/PropertiesPage";
import KYCPage from "../pages/KYCPage";
import { getSubdomain } from "../config/domainConfig";
import { Heading } from "@chakra-ui/react";

let router: ReturnType<typeof createBrowserRouter>;
const subdomain = getSubdomain();

if (subdomain === "admin")
  router = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        { index: true, element: <Navigate to="properties" /> },
        { path: "properties", element: <PropertiesPage /> },
        { path: "kycs", element: <KYCPage /> },
      ],
    },
  ]);
else if (subdomain === "kyc")
  router = createBrowserRouter([{ path: "/:slug", element: <FormLayout /> }]);
else
  router = createBrowserRouter([
    { path: "/*", element: <Heading> Not found </Heading> },
  ]);

export default router;
