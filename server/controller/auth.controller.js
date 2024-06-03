import User from '../models/user.model.js'
import generateToken from '../utils/generateToken.js';

export const signup = async (req,res) => {
    const {username, email, password} = req.body;
    const user = await User.findOne({email});
    if(user) return res.status(400).json("email already in use")
    // if(password.length < 6) return res.status(400).json("password must be atleast 6 characters")
    try{
        const newUser = new User({
            username,
            email,
            password
        })
        if(newUser){
            generateToken(newUser._id, res);

            await newUser.save();
        }
        res.status(201).json("User Created Successfully")
        console.log("w");
    } catch (err) {
        console.log(err);
    }

}
export const signin = async (req,res) => {
    const {email, password} = req.body;
    try{
        const validUser = await User.findOne({email});
        if(!validUser || password !== validUser.password) return res.status(400).json("invalid credentials")
        
        generateToken(validUser._id, res);
        res.status(200).json({message:"Logged in successfully",id:validUser._id})
    } catch (err) {
        console.log(err);
    }
}
export const signout = async (req,res) => {
    console.log("Signout");
}