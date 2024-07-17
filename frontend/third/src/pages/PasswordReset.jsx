import { Button, InputAdornment, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SendIcon from "@mui/icons-material/Send"
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from "yup"
import bgImage from "../assets/images/login-bg.jpg"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { toast } from 'react-toastify'

const passwordSchema = Yup.object().shape({
  password: Yup.string().required("Password is required!")
    .min(4, "Password is too short!"),
  passwordConfirmation: Yup.string().required("Password Confirm is required!")
    .oneOf([Yup.ref("password")], "Passwords not match")
})

function PasswordReset() {

  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isVisibleConfirmation, setIsVisibleConfirmation] = useState(false)

  const location = useLocation()
  const token = location.pathname.split("token=")[1]

  const navigate = useNavigate()

  const handleResetPassword = async (value) => {
    await axios.post("http://localhost:9000/user/reset-password/" + token, value)
      .then(res => {
        if (res.data.status) {
          toast.success(res.data.message)
          navigate("/login")
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
        initialValues={{ password: "", passwordConfirmation: "" }}
        onSubmit={(values) => handleResetPassword(values)}
        validationSchema={passwordSchema}
      >
        {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
          <div className='flex flex-col sm:w-1/2 md:w-1/3 p-10 rounded-lg shadow-2xl bg-red-50/60 '>


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
                        <Visibility />
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
                        <Visibility />
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
              Create New Password</Button>
          </div>
        )}

      </Formik>


    </div>
  )
}

export default PasswordReset