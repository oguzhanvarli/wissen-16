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

app.post("/product", async(req,res) => {
  try {
    let product = await Product.create(req.body)
    // console.log(product)
    res.status(200).send({status: true, message: "Product Created", product:product })
  } catch (error) {
    // console.log(error)
    res.status(400).send({staus: false, message: error.message})
  }
})

app.get("/product", async(req, res) => {
  try {
    let products = await Product.find({})
    res.status(200).send({status : true, message: "Get All Products" , products: products})
  } catch (error) {
    console.log(error)
    res.status(400).send({status: false, message: error.message})
  }
})
app.get("/product/:id", async(req,res) => {
  try {
    const id = req.params.id
    let product = await Product.findById(id)
    res.status(200).send({status: true, message: "Product", product: product })
  } catch (error) {
    res.status(400).send({status: false, message: error.message})
  }
})

app.delete("/product", async(req, res) => {
  try {
    //BİRİNCİ ALIŞ YOLU
    // const id = req.body.id
    // const price = req.body.price
    // const name = req.body.name
    
    //İKİNCİ ALIŞ YOLU
    // let {id, price, name} = req.body

    let {id} = req.body
    let product = await Product.findByIdAndDelete(id)
    if(!product){
      return res.status(404).send({status: false, message: "Product not found!"})
    }
    res.status(200).send({status: true, message: "Product Deleted"})

  } catch (error) {
    res.status(400).send({status: false, message: error.message})
  }
})

app.listen(9000)