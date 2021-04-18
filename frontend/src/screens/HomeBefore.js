import React from 'react';
import Button from 'react-bootstrap/esm/Button';

import { Link } from 'react-router-dom';
import logo from '../bigsale.png';
import './HomeBefore.css';

function homeBefore() {
    return (
        <div id="bg">


    <img src={logo} alt="bigsale" className="bigsale"/>
        
        <Link to="/home">
     <Button type="button">
          offer products
     </Button>
 </Link>
 
      </div>
        
    )
}

export default homeBefore
