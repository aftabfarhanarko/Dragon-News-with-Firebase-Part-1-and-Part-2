import { createBrowserRouter } from "react-router";
import Homelayout from "../layout/Homelayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
  },
  {
    path: "/",
    element: <Homelayout></Homelayout>,
  },
  {
    path: "/*",
    element: <h2>This Page Not Found 404</h2>,
  },
]);

