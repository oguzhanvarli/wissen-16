import { RouterProvider } from "react-router-dom";
import router from "./router";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" autoClose={4000} theme="colored" transition={Zoom} />
    </>
  );
}

export default App;
