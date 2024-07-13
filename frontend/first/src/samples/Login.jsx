import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from "@mui/icons-material/Send"
import axios from 'axios'

function Login() {

  const [isLoading, setIsLoading] = useState(false)
  let username = ""
  let password = ""

  const handleLogin = async() => {
    setIsLoading(true)
    console.log(username + " - " + password)
    let requestObj = {
      username: username,
      password: password
    }
    //LOCALDE CEVAP ÇOK HIZLI GELDİĞİ İÇİN LOADING GORMEK İSTEDİM.
    setTimeout(async() => {
      await axios.post("http://localhost:9000/user/login", requestObj)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Login Error", err))
      .finally(() => setIsLoading(false))
    }, 2000);
  }


  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <TextField
        variant='outlined'
        label="Username"
        sx={{ mb: 2 }}
        onChange={(event) => username = event.target.value }
      />
      <TextField
        variant='outlined'
        label="Password"
        sx={{ mb: 2 }}
        onChange={(event) => password = event.target.value}
      />
      <Button
        variant='outlined'
        endIcon={<SendIcon />}
        onClick={handleLogin}
        disabled={isLoading}
        >
        Login</Button>
    </div>
  )
}

export default Login