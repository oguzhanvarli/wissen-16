import { RouterProvider } from "react-router-dom";
import router from "./router";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Zoom } from "react-toastify";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { userLogin } from "./store/features/userSlice";
import { decryptToken } from "./helpers/utilityFunctions";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    checkToken()
  }, [])



  const checkToken = () => {
    let tokenFromLocal = localStorage.getItem("access_token")
    if (tokenFromLocal) {
      let decryptedToken = decryptToken(tokenFromLocal)
      if (decryptedToken !== "") {
        let decodedToken = jwtDecode(decryptedToken)
        let { exp } = decodedToken
        let date = new Date()
        let currentTime = date.getTime() / 1000
        if (currentTime < exp) {
          dispatch(userLogin({ isUser: true, username: decodedToken.username }))
        } else {
          localStorage.removeItem("access_token")
        }
      }

      // console.log('Expired Date Token ' + exp)
      // console.log('Current Time ' + currentTime)
    }
  }


  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" autoClose={2000} theme="colored" transition={Zoom} />
    </>
  );
}

export default App;
