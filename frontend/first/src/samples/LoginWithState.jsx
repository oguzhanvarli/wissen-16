import { Button, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from "@mui/icons-material/Send"
import axios from 'axios'
import { Visibility, VisibilityOff } from '@mui/icons-material'

function LoginWithState() {
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async() => {
    if(username === "" || password === "" || username.length < 3 || password.length < 3){
      return console.log("Boş Gönderdin")
    }
    setIsLoading(true)
    await axios.post("http://localhost:9000/user/login", {username,password})
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false))
  }


  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <TextField
        variant='outlined'
        label="Username"
        sx={{ mb: 2 }}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        variant='outlined'
        label="Password"
        sx={{ mb: 2}}
        type={isVisible ? "text" : "password"}
        onChange={(e) => setPassword(e.target.value)}
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

export default LoginWithState