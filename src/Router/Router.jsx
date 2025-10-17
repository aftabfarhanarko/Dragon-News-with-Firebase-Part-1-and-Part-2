import { createBrowserRouter } from "react-router";
import Homelayout from "../layout/Homelayout";
import Home from "../Page/Home";
import CaterogyNews from "../Page/CaterogyNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/caterogy/:id",
        element: <CaterogyNews></CaterogyNews>,
        loader: () => fetch("/news.json")
      },
    ],
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
