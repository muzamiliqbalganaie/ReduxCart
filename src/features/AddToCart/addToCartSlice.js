//Create a Redux Slice for Cart
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    changed: false,
    totalAmount: 0,
};

const addToCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = newItem.price;
            }
            state.totalAmount += newItem.price;
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
            state.totalAmount -= existingItem.price;
        },
    }
});


export const { addItem, removeItem } = addToCartSlice.actions;

export default addToCartSlice.reducer;