const express = require("express")
const mongoose = require("mongoose")

const Product = require("./models/productModel")
const productRouter = require("./routes/productRoute")
const userRouter = require("./routes/userRoute")
const tokenControl = require("./middleware/auth")

require("dotenv").config()

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://oguzhnvarli:oguzhnvarli@cluster0.abrnlib.mongodb.net/wissen-16?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("MongoDb Connected"))
.catch((err) => console.log(err))

app.get("/",(req, res) => {
  res.send("Merhaba Express.js")
})

//MIDDLEWARE
//app.use(tokenControl)


////ROUTER YAPISI
app.use("/product", productRouter)
app.use("/user", userRouter)



app.listen(9000)