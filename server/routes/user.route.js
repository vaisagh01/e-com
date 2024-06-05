import express from 'express'
import User from '../models/user.model.js'

const router = express.Router();

router.get('/find/:id', async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password,...rest } = user._doc;
        console.log(user);
        res.status(200).json(rest) 
    } catch (error) {
        console.log(error);
    }
})

router.put('/update/:id',async (req,res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },{new:true}
        )
        console.log(updatedUser);
        res.status(200).json("User updated")
    } catch (err){
        res.status(500).json({message:err})
    }
})
export default router;