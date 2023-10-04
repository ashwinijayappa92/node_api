const Product = require('../models/product.model');
const asyncHandler = require('express-async-handler')
// get single product
const getProductById = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
       // res.status(500).json({ "message": error.messsage })
       res.status(500);
       throw new Error(error.message);
    }
});

// get all the prodcuts
const findAllProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);

    } catch (error) {
       // res.status(500).json({ "message": error.messsage })
       res.status(500);
       throw new Error(error.message);
    }
});

// create products
const postProducts = asyncHandler(async (req, res) => {
    //  console.log(req.body);
    //  res.send(req.body);
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        // res.status(500).json({ message: error.message })
        res.status(500);
        throw new Error(error.message);
    }
});

// update the product
const updateProducts = asyncHandler(async(req, res)=>{
    try{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if(!product){
       return  res.status(404).json({message:`connot find any product with ${id}`});
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct)
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
});

// delete the product
const deleteProdcuts = asyncHandler(async(req, res)=>{
    try{
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if(!product){
        res.status(404);
        throw new Error(`connot find any product with ${id}`);
       // return  res.status(404).json({message:`connot find any product with ${id}`});
    }
    res.status(200).json(product)
    }catch(error){
        // res.status(500).json({message:'message'})
        res.status(500);
        throw new Error(error.message);
    }
});

// const getSingleProduct = async(req, res)=>{
//     try{
//         const {id} = req.params;


//     }catch(error){
//         res.status(500).JSON.message({message:`not able to fetch product for ${id}`})
//     }
// }

module.exports = {
    getProductById, findAllProducts, postProducts, updateProducts, deleteProdcuts
}