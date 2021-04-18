import React from 'react';
import Products from '../components/Products';
import './HomeScreen.css';

import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getProducts as listProducts} from '../redux/actions/productActions';
function HomeScreen() {

const dispatch=useDispatch();

const getProducts=useSelector((state)=>state.getProducts);
const {products,loading,error}=getProducts;

useEffect(() => {
    dispatch(listProducts());
}, [dispatch]);

    return (
        
        <div className="home">
    
            <h4 className="homescreen_title">OFFER PRODUCTS</h4>
<div className='homescreen_products'>
        {loading?<h2>wait a sec</h2>:error?<h2>{error}</h2>:products.map(product=>(
            <Products key={product._id}
            productId={product._id}
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
            />
           
        ))} 
    </div>
        </div>
        
    )
}

export default HomeScreen
