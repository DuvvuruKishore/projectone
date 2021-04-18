import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

import NavBar from './components/NavBar';
import HomeBefore from './screens/HomeBefore';



function App() {
  return (
    
    <Router>
   <NavBar/>
    <main>
    <Switch>
    <Route exact path='/' component={HomeBefore}/>
    <Route exact path='/home' component={HomeScreen}/>
    <Route exact path='/product/:id' component={ProductScreen}/>
    <Route exact path='/cart' component={CartScreen}/>

    </Switch>
    </main>
    </Router>
  );
}

export default App;
