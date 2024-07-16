import { Button, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from "@mui/icons-material/Send"
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from "yup"
import bgImage from "../assets/images/login-bg.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const emailSchema = Yup.object().shape({
  email: Yup.string().required("Email is required!")
    .email("Invalid Email"),
})

function ForgotPassword() {

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSendMail = async (value) => {
    await axios.post("http://localhost:9000/user/reset-password-request", value)
    .then((res) => {
      if(res.data.status){
        toast.success(res.data.message)
      }
    })
    .catch(err => console.log(err))
  }
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      className="flex flex-col justify-center items-center h-[100vh]">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => handleSendMail(values)}
        validationSchema={emailSchema}
      >
        {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) => (
          <div className='flex flex-col sm:w-1/2 md:w-1/3 p-10 rounded-lg shadow-2xl bg-red-50/60 '>
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
            <Button
              variant='outlined'
              endIcon={<SendIcon />}
              onClick={handleSubmit}
              disabled={isLoading}
              color='success'
            >
              Send Mail</Button>
            <Link to="/login" className='text-lime-900 text-right pt-3' >Have a Account? <span className='text-blue-400 hover:underline'>Login Now!</span></Link>
          </div>
        )}

      </Formik>


    </div>
  )
}

export default ForgotPassword