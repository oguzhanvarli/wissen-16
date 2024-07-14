import { Button, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from "@mui/icons-material/Send"
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from "yup"
import bgImage from "../assets/images/login-bg.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { toast } from 'react-toastify'

const registerSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!")
    .min(3, "Username is too short!").max(15, "Username is too long!"),
  email: Yup.string().required("Email is required!")
    .email("Invalid Email"),
  password: Yup.string().required("Password is required!")
    .min(4, "Password is too short!"),
  passwordConfirmation: Yup.string().required("Password Confirm is required!")
  .oneOf([Yup.ref("password")],"Passwords not match")
  // .oneOf([Yup.ref('password'), null], 'Passwords must match')

})

function Register() {

  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isVisibleConfirmation, setIsVisibleConfirmation] = useState(false)

  const navigate = useNavigate()
  
  const handleRegister = async ({ email, username, password }) => {
    let requestObj = { email, username, password }
    await axios.post("http://localhost:9000/user/register", requestObj)
      .then(res => {
        if(res.data.status){
          toast.success(res.data.message)
          navigate("/login")
        }
      })
      .catch(err => console.log("Register Error", err))
  }


  return (
    <div
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      className="flex flex-col justify-center items-center h-[100vh]">
      <Formik
        initialValues={{ username: "", password: "", email: "", passwordConfirmation: "" }}
        onSubmit={(values) => handleRegister(values)}
        validationSchema={registerSchema}
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
              label="Email"
              sx={{ mb: 2 }}
              name='email'
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              helperText={touched.email && errors.email}
              error={touched.email && Boolean(errors.email)}
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
              type={isVisible ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment onClick={() => setIsVisible(!isVisible)}>
                  {
                    isVisible ?
                     <VisibilityOff /> : 
                     <Visibility  />
                  }
                    
                  </InputAdornment>
                )
              }}
            />
            <TextField
              variant='outlined'
              label="Password Confirm"
              sx={{ mb: 2 }}
              name='passwordConfirmation'
              onChange={handleChange("passwordConfirmation")}
              onBlur={handleBlur("passwordConfirmation")}
              value={values.passwordConfirmation}
              type={isVisibleConfirmation ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment onClick={() => setIsVisibleConfirmation(!isVisibleConfirmation)}>
                  {
                    isVisibleConfirmation ?
                     <VisibilityOff /> :  
                     <Visibility  />
                  }
                    
                  </InputAdornment>
                )
              }}
              helperText={touched.passwordConfirmation && errors.passwordConfirmation}
              error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
            />
            <Button
              variant='outlined'
              endIcon={<SendIcon />}
              onClick={handleSubmit}
              disabled={isLoading}
              color='success'
            >
              Register</Button>
            <Link to="/login" className='text-lime-900 text-right pt-3' >Have a Account? <span className='text-blue-400 hover:underline'>Login Now!</span></Link>
          </div>
        )}

      </Formik>


    </div>
  )
}

export default Register