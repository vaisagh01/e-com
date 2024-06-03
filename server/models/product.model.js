import mongoose from "mongoose";
// creating a schema
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        require: true,
    },
    desc:{
        type:String,
        require:true
    },
    img: {
        type: String,
        require: true,
    },
    categories: {
        type: Array,
    },
    size: {
        type: String,
    },
    color: {
        type: String,
    },
    
    price: {
        type: Number,
        require: true,
    },
    
}, {timestamps: true}); //timestamp puts the creation time and stuff

// model definition
const Product = mongoose.model('Product', productSchema);

// exporting to user elsewhere
export default Product;