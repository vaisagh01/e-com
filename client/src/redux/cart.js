import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
            state.total += action.payload.price
        },
        Decrement: (state, action) => {
            const itemIndex = state.products.findIndex(
                product => product.type === action.payload.type // Use a unique identifier (id)
            );
            if(state.products[itemIndex].quantity > 1){
                state.products[itemIndex].quantity -= 1;
                state.total -= action.payload.price
            }
        },
        deleteProduct: (state, action) => {
            const itemIndex = state.products.findIndex(
              product => product.type === action.payload.type // Use a unique identifier (id)
            );
            state.total -= state?.products[itemIndex]?.price * state?.products[itemIndex]?.quantity || null; // Update total based on removed item
            console.log(state.products[itemIndex].quantity);
            if (itemIndex !== -1) {
              const updatedProducts = state.products.filter(
                (_, index) => index !== itemIndex
              );
            state.products = updatedProducts;
    
            state.quantity -= 1;
            }
        }
        
    }
})

export const {addProduct, deleteProduct, Increment, Decrement} = cartSlice.actions;
export default cartSlice.reducer