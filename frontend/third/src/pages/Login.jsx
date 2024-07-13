import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from "@mui/icons-material/Send"
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from "yup"

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!")
  .min(3,"Username is too short!").max(15, "Username is too long!"),
  password: Yup.string().required("Password is required!")
  .min(4, "Password is too short!")
})

function Login() {

  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (value) => {
    await axios.post("http://localhost:9000/user/login", value)
      .then(res => console.log(res.data))
      .catch(err => console.log("Login Error", err))
  }


  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={loginSchema}
      >
        {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
          <>
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
            >
              Login</Button>
          </>
        )}

      </Formik>


    </div>
  )
}

export default Login