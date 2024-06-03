import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    products: [
        {
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

        }
    ]
    
}, {timestamps: true}); //timestamp puts the creation time and stuff

// model definition
const Cart = mongoose.model('Cart', cartSchema);

// exporting to user elsewhere
export default Cart;