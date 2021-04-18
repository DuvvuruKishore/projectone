import React from 'react';
import {Link} from 'react-router-dom';
import './CartItem.css';

function CartItem({item,qtyChangeHandler,removeFromCart}) {
    return (
        <div className="cartitem">
        <div className="caritem_image">
        <img src={item.imageUrl} alt={item.name}/>
         </div>
        <Link to ={`products/${item.product}`} className="cartitem__name">
        <p>{item.name}</p>
        </Link>
       
        <p className="cartitem__price">Rs:{item.price}</p>

        <select className="cartitem_select" value={item.qty} onChange={(e)=>qtyChangeHandler(item.product,e.target.value)}>
        {[...Array(item.countInStock).keys()].map(x=>(
            <option key={x+1} value={x+1}>{x+1}</option>
        ))}
        </select>

        <button className="cartitem_deleteBtn" onClick={()=>removeFromCart(item.product)}>
        <i className="fas fa-trash"></i>
        </button>
        </div>
    )
};

export default CartItem
