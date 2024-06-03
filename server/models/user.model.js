import mongoose from "mongoose";

// creating a schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email:{
        unique:true,
        type:String,
        require:true
    },
    password: {
        type: String,
        require: true,
    }
}, {timestamps: true}); //timestamp puts the creation time and stuff

// model definition
const User = mongoose.model('User', userSchema);

// exporting to user elsewhere
export default User;