import express from "express";
import Product from '../models/product.model.js'

const router = express.Router();

//GET PRODUCT
router.get('/:product', async (req,res) => {
    const title = req.params.product
    console.log(title);
    try {
        const product = await Product.findOne({type:title})
        // console.log(typeof product);
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
})

//GET PRODUCTS
router.get('/', async (req,res) => {
    const query = req.query.new;
    const category = req.query.category
    try {
        let products;
        if(query){
            products = await Product.find().sort({createdAt: -1}).limit(1)
        }
        else if(category){
            products = await Product.find({ $in: [category]})
        }
        else {
            products = await Product.find()
        }

        res.status(200).json(products)
    } catch (error) {
        console.log(err);
    }
})


export default router;