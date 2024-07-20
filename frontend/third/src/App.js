import { RouterProvider } from "react-router-dom";
import router from "./router";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" autoClose={2000} theme="colored" transition={Zoom} />
    </Provider>
  );
}

export default App;
