const express = require("express")
const Product = require("../models/productModel")
const productRouter = express.Router()

productRouter.post("/product", async(req,res) => {
  try {
    let product = await Product.create(req.body)
    // console.log(product)
    res.status(200).send({status: true, message: "Product Created", product:product })
  } catch (error) {
    // console.log(error)
    res.status(400).send({staus: false, message: error.message})
  }
})

productRouter.get("/product", async(req, res) => {
  try {
    let products = await Product.find({})
    res.status(200).send({status : true, message: "Get All Products" , products: products})
  } catch (error) {
    console.log(error)
    res.status(400).send({status: false, message: error.message})
  }
})
productRouter.get("/product/:id", async(req,res) => {
  try {
    const id = req.params.id
    let product = await Product.findById(id)
    res.status(200).send({status: true, message: "Product", product: product })
  } catch (error) {
    res.status(400).send({status: false, message: error.message})
  }
})

productRouter.delete("/product", async(req, res) => {
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

productRouter.put("/product", async(req, res) => {
  try {
    let {id} = req.body
    if(!id){
      return res.status(404).send({status: false, meessage: "Id is required!"})
    }
    let product = await Product.findByIdAndUpdate(id, req.body)
    res.status(200).send({status: true, message: "Product Updated", product: product })
  } catch (error) {
    res.status(400).send({status: false, message: error.message})
  }
})

module.exports = productRouter