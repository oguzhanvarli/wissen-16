const express = require("express")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const userRouter = express.Router()

userRouter.post("/register", async(req, res) => {
  try {
    const {username, email, password} = req.body
    if(!username || !email || !password){
      return res.status(404).send({status: false, message: "Empty Field"})
    }
    let user = await User.create(req.body)
    res.status(200).send({status: true, message: "User Created", user: user})
  } catch (error) {
    res.status(400).send({status: false, message: error.message})
  }
})

userRouter.post("/login", async(req, res) => {
  try {
    const {username, password} = req.body
    if(!username || !password || username == "" || password == ""){
      return res.status(404).send({staus: false, message: "Empty Field"})
    }
    let userFromDb = await User.findOne({username})
    //Normalde parola ve username için ayrı ayrı hata mesajı dönülmemesi gerekemektedir
    //Ders anlatımı sebebiyle ayrı yazılmıştır.
    if(!userFromDb){
      return res.status(404).send({status: false, message: "Username is not found"})
    }
    if(password !== userFromDb.password){
      return res.status(404).send({status: false, message: "Inccorect Passoword"})
    }
    //Token İşlemi
    let access_token = jwt.sign({userId : userFromDb.id, username: userFromDb.username}, process.env.MYKEY, 
      {expiresIn: "2h"}
    )
    res.status(200).send({status: true,
     message: `Welcome ${userFromDb.username}`,
     user: userFromDb,
     access_token : access_token
    })

  } catch (error) {
    res.status(400).send({status: false, message: error.message})
  }
})





module.exports = userRouter