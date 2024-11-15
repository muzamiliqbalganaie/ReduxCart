//Config and create store
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/AddToCart/addToCartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;