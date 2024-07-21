import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from "@mui/icons-material/Send"
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from "yup"
import bgImage from "../assets/images/login-bg.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { userLogin } from '../store/features/userSlice'

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!")
    .min(3, "Username is too short!").max(15, "Username is too long!"),
  password: Yup.string().required("Password is required!")
    .min(4, "Password is too short!")
})

function Login() {

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = async (value) => {
    await axios.post("http://localhost:9000/user/login", value)
      .then(res => {
        if (res.data.status) {
          toast.success(res.data.message)
          dispatch(userLogin(res.data.user))
          navigate("/")
        }
      })
      .catch(err => {
        if (err.response.data.status === false) {
          toast.error(err.response.data.message)
        } else {
          toast.error("Something went wrong, Please Try Again")
        }
      })
  }


  return (
    <div
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      className="flex flex-col justify-center items-center h-[100vh]">
      <Formik
        initialValues={{ username: "oguzhan3", password: "oguzhan3" }}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={loginSchema}
      >
        {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
          <div className='flex flex-col sm:w-1/2 md:w-1/3 p-10 rounded-lg shadow-2xl bg-red-50/60 '>
            <TextField
              variant='outlined'
              label="Username"
              sx={{ mb: 2 }}
              name='username'
              onChange={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              helperText={touched.username && errors.username}
              error={touched.username && Boolean(errors.username)}
            />
            <TextField
              variant='outlined'
              label="Password"
              sx={{ mb: 2 }}
              name='password'
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              helperText={touched.password && errors.password}
              error={touched.password && Boolean(errors.password)}
            />
            <Button
              variant='outlined'
              endIcon={<SendIcon />}
              onClick={handleSubmit}
              disabled={isLoading}
              color='success'
            >
              Login</Button>
            <div className='flex justify-between'>
              <Link to="/forgot-password" className='text-blue-400 pt-3'>Forgot Password?</Link>
              <Link to="/register" className='text-blue-400 text-right pt-3 hover:underline' >Create a Account Now!</Link>
            </div>
          </div>
        )}

      </Formik>


    </div>
  )
}

export default Login