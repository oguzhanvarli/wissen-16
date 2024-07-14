import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import NotFound404 from "./pages/NotFound404";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element : <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/product-detail",
    element: <ProductDetail />
  },
  {
    path: "*",
    element: <NotFound404 />
  }
])
export default router

