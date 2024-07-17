import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import NotFound404 from "./pages/NotFound404";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordReset from "./pages/PasswordReset";

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
    path:"/forgot-password",
    element: <ForgotPassword/>
  },
  {
    path: "/password-reset/:token",
    element: <PasswordReset />, 
  },
  {
    path: "/product-detail/:productName",
    element: <ProductDetail />
  },
  {
    path: "*",
    element: <NotFound404 />
  }
])
export default router

