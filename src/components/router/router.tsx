import { createBrowserRouter } from "react-router";
import FormLayout from "../layouts/FormLayout";
import LoginPage from "../pages/LoginPage";

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
    element: <LoginPage />,
  },
]);

export default router;
