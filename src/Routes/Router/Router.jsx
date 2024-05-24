import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home/Home";
import OurMenu from "../../pages/OurMenu/OurMenu";
import OurShop from "../../pages/OurShop/OurShop";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Dashboard from "../../layouts/Dashboard";
import Cart from "../../pages/Dashboard/Cart/Cart";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/shop",
        element: <OurShop />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      // users route
      {
        path: "cart",
        element: <Cart />,
      },

      // admin routes
      {
        path: "users",
        element: <AllUsers />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
