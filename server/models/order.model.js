const mongoose = require('mongoose');
// creating a schema
const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    products: [
        {
            productId:{type:String, },
            quantity:{type:Number, default:1},

        }
    ],
    amount: { type: Number,require:true, default: 0 },
    address: {type:Object, require:true},
    state:{type:String, default:"pending"}
    
}, {timestamps: true}); //timestamp puts the creation time and stuff

// model definition
const Order = mongoose.model('Order',orderSchema );

// exporting to user elsewhere
export default ORder;