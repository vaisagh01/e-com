import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import updateCart from "./update";
updateCart({products:[], userId:'66570afcf9adb42d2d5347e7'})
// const [list, setList] = useState([]);
// const cart = useSelector(state => state.cart)

// const fetchData = async ()=>{
//     const res = await fetch('/api/cart/',{
//         method:'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body : JSON.stringify({userId:userId})
//     });
//     const data = await res.json();
//     // setList(data.products)

//     console.log(data);
// }
// fetchData();

const initialState = {
    userId:"",
    products:[],
    quantity:0,
    total:0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity
        },
        Increment: (state, action) => {
            const itemIndex = state.products.findIndex(
                product => product.type === action.payload.type // Use a unique identifier (id)
            );
            state.products[itemIndex].quantity += 1;
        },
        Decrement: (state, action) => {
            const itemIndex = state.products.findIndex(
                product => product.type === action.payload.type // Use a unique identifier (id)
            );
            if(state.products[itemIndex].quantity > 0){
                state.products[itemIndex].quantity -= 1;
            }
        },
        deleteProduct: (state, action) => {
            const itemIndex = state.products.findIndex(
              product => product.type === action.payload.type // Use a unique identifier (id)
            );
            console.log(itemIndex);
            if (itemIndex !== -1) {
              const updatedProducts = state.products.filter(
                (_, index) => index !== itemIndex
              );
              state.products = updatedProducts;
      
              state.quantity -= 1;
              state.total -= state.products[itemIndex]?.price * state.products[itemIndex]?.quantity; // Update total based on removed item
            }
        }
        
    }
})

export const {addProduct, deleteProduct, Increment, Decrement} = cartSlice.actions;
export default cartSlice.reducer