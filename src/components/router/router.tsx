import { createBrowserRouter, Navigate } from "react-router";
import FormLayout from "../layouts/FormLayout";
import LoginPage from "../pages/LoginPage";
import AdminLayout from "../layouts/AdminLayout";
import PropertiesPage from "../pages/PropertiesPage";
import KYCPage from "../pages/KYCPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormLayout />,
  },
  {
    path: "/admin/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="properties" /> },
      { path: "properties", element: <PropertiesPage /> },
      { path: "kycs", element: <KYCPage /> },
    ],
  },
]);

export default router;
