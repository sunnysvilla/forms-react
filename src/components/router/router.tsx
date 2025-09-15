import { createBrowserRouter } from "react-router";
import FormLayout from "../layouts/FormLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormLayout />,
  },
]);

export default router;
