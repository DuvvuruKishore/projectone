import React from 'react';
import './CartScreen.css';
import CartItem from  '../components/CartItem';

import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart ,removeFromCart} from '../redux/actions/cartActions';



function CartScreen() {
    const dispatch=useDispatch();

    const car=useSelector(state=>state.cart);
    const {cartItems} =car;

 const  qtyChange=(id,qty)=>{
     dispatch(addToCart(id,qty))
 }
 const removeHandler=(id)=>{
     dispatch(removeFromCart(id));
 }
 const getCartCount=()=>{
     return cartItems.reduce((qty,item)=>Number(item.qty)+qty,0)
 }
 const getCartSubTotal=()=>{
     return cartItems.reduce((price,item)=>(item.price*item.qty)+price,0);
 }

    return (
        <div className="cartscreen">

        <div className="cartscreen_left">
        <h2>Shopping card</h2>
        {cartItems.length===0?(
            <div>
            your card is empty <Link to='/home'>home</Link>
            </div>
        ):cartItems.map(item=>(<CartItem item={item} qtyChangeHandler={qtyChange} removeFromCart={removeHandler}/>))}
           
        </div>
        <div className="cartscreen_right">
         <div className="cartscreen__right">
         <p>Subtotal ({getCartCount()}) items</p>
         <p>Rs:{getCartSubTotal()}</p>
         <button>Proceesed to checkout</button>
         </div>
        </div>
</div>
    )
}

export default CartScreen;
