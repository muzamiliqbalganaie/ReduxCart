// src/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../features/AddToCart/addToCartSlice';
import './cart.css';

const Cart = () => {
    const items = useSelector((state) => state.cart.items);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    return (
        <div className="cart-container">
            <h2 className="cart-header">Cart</h2>
            <div className="cart-summary">
                <p>Total Quantity: {totalQuantity}</p>
                <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            </div>
            <ul className="cart-items">
                {items.map((item) => (
                    <li key={item.id} className="cart-item">
                        {item.name} - ${item.price} x {item.quantity}
                        <div>
                            <button onClick={() => handleAddItem(item)}>+</button>
                            <button onClick={() => handleRemoveItem(item.id)}>-</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;