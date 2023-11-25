import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { json } from "stream/consumers";

interface StateType {
    cartItems: any[];
    totalPrice: number;
    totalCount: number;
    count: number;
}
  
const initialStateParam: StateType = {
    cartItems: [],
    totalPrice: 0,
    totalCount: 0,
    count: 1,
};

export const progressSlice = createSlice({

    name: "cart",
    initialState: initialStateParam,
    reducers: {
        addToCart: (state, action) => {
            const CartData = action.payload.ArrItem;
            const checkProductInCart = state.cartItems.find((item:any) => item.id === CartData.id);
            const checkProductSizeInCart = state.cartItems.find((item:any) => item.size === CartData.size);
            const checkProductSauceInCart = state.cartItems.find((item:any) => item.sauce === CartData.sauce);

            state.totalPrice += CartData.price * action.payload.count;
            state.totalCount += action.payload.count;
            
            if (checkProductInCart && checkProductSizeInCart && checkProductSauceInCart) {
                const updatedCartItems : Array<string | number> = state.cartItems.map((item:any) => {
                    if (item.pid === CartData.pid)
                        return {
                            ...item,
                            count: item.count + state.count,
                        };
                    else
                        return {
                            ...item,
                        };
                });
                state.cartItems = updatedCartItems
            } else {
                state.cartItems = [...state.cartItems, {...CartData}];
                state.count= state.count
            }
            state.count = 1
        },

        onRemove: (state, action) => {
            const foundProduct = state.cartItems.find((item:any) => item.pid === action.payload);
            const newCartItems = state.cartItems.filter((item:any) => item.pid !== action.payload);
            
            state.totalPrice -= foundProduct.price * foundProduct.count;
            state.totalCount -= foundProduct.count;
            state.cartItems = newCartItems;
        },

        // ------- inc or dec cart Item list -------
            toggleCartItemQuantity: (state, action) => {
            const foundProduct = state.cartItems.find((item:any) => item.pid === action.payload.PID);
            const index = state.cartItems.findIndex((product:any) => product.pid === action.payload.PID);

            if (action.payload.value === "inc") {
                state.cartItems = [...state.cartItems.slice(0, index), { ...foundProduct, count: foundProduct.count + 1 }, ...state.cartItems.slice(index + 1)];
                state.totalPrice += Number(foundProduct.price);
                state.totalCount += 1;
            } else if (action.payload.value === "dec") {
            if (foundProduct.count > 1) {
                state.cartItems = [...state.cartItems.slice(0, index), { ...foundProduct, count: foundProduct.count - 1 }, ...state.cartItems.slice(index + 1)];
                state.totalPrice -= Number(foundProduct.price);
                state.totalCount -= 1;
            }
            }
        },

        incCount: state => {
            state.count += 1
        },

        decCount: state => {
            state.count -= 1
        },
        
        
        incrementWithUserData: (state, action:PayloadAction<number>) => {
            state.count += action.payload
        }
    } 
})

export const {
    addToCart,
    onRemove,
    toggleCartItemQuantity,
    incCount,
    decCount,
    incrementWithUserData
} = progressSlice.actions

export default progressSlice.reducer;
