import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages2/Home';
import Product from './pages2/Product';
import Header from './pages2/Header';
import Cart from './pages2/Cart';
import Signup from './pages2/Signup';
import Login from './pages2/Login';
import ProductCreate from './pages2/ProductCreate';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Switch>
          
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/product">
              <Product />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/user">
              <ProductCreate />
            </Route>
            
        </Switch>
      </Router>

    </div>
  );
}

export default App;