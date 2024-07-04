const express = require("express")
const mongoose = require("mongoose")

const Product = require("./models/productModel")

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://oguzhnvarli:oguzhnvarli@cluster0.abrnlib.mongodb.net/wissen-16?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("MongoDb Connected"))
.catch((err) => console.log(err))

app.get("/",(req, res) => {
  res.send("Merhaba Express.js")
})

// app.get("/home", (req,res) => {
//   res.send("Hocam acıktık mola")
// })

app.post("/product", (req,res) => {
  //console.log(req.body)
  Product.create(req.body)
  res.status(200).send({success: true, message: "Product Added"})
})

app.listen(9000)