import express from "express";
import Cart from "../models/cart.model.js";


const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const userId = req.body.userId
        const validCart = await Cart.findOne({userId:req.body.userId})
        console.log(validCart);
        if(!validCart) {
            const newCart = new Cart(["ye"]);
            await newCart.save()
            res.status(200).json(newCart)
            return
        }
        res.status(200).json({validCart, userId})
    } catch (error) {
        res.status(400).json(error)
    }
})

router.put('/update', async (req,res) => {
    try {
        const {userId, products} = req.body;
        console.log(req.body);
        const updatedCart = await Cart.findOneAndUpdate(
            { userId: userId }, // Filter by user ID
            { $set: { products } }, // Update the "products" field with the provided array
            { new: true } // Return the updated document
          );
        res.status(200).json(updatedCart)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
})


export default router;