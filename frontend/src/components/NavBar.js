import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './NavBar.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function NavBar() {
    return (
        
    
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand >BIG OFFERS SALE</Navbar.Brand>
        <Nav className="ml-auto navbar_links">
          <Nav.Link href="/cart" className="cart_link">cart</Nav.Link>
          
          <Nav.Link href="/home">shop</Nav.Link>
          <DropdownButton id="dropdown-basic-button"  className="hamburger_menu" title="Menu">
  <Dropdown.Item href="/cart">cart</Dropdown.Item>
  <Dropdown.Item href="/home">shop</Dropdown.Item>
  
</DropdownButton>

        </Nav>
        
      </Navbar>
      
       /* <nav className="navbar">
        <div className="navbar_logo">
        <h2>BIG SALE FESTIVAL</h2>
        </div>

        <ul className="navbar_links">
        <li>
        <Link to ="/cart">
        <i className="fas fa-shooping-cart"></i>
        Cart
        <span className="cartlogo_badge">0</span>
        </Link>
        </li>
        <li>
        <Link to="/">Shop</Link>
        </li>
        </ul>
     
        <div className="hamburger_menu">
        <div></div>
        <div></div>
        <div></div>
        </div>

        </nav>*/
    )
}

export default NavBar
