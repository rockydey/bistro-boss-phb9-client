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
import AddItems from "../../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "../AdminRoute/AdminRoute";
import ManageItems from "../../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../../pages/Dashboard/PaymentHistory/PaymentHistory";

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
      // user routes
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },

      // admin routes
      {
        path: "add-items",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "update-item/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
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
