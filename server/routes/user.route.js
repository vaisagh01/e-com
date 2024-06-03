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

export default router;