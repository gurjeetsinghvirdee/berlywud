import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Carousel from './Carousel'
import Home from './Home'
import Cart from './Cart';
import Footer from './Footer'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import Productmain from './Productmain'
import Signin from './Signin';
import Register from './Register';
import Shippingaddress from './Shippingaddress';
import Payment from './Payment';
import Orderdetails from './Orderdetails';
import Orderhistory from './Orderhistory';
import Myprofile from '../src/Myprofile';
import ProductList from './ProductList';
import AdminRoute from './AdminRoute';
import ProductEdit from './ProductEdit';
import OrderList from './OrderList';

function App() {
 
  
  return(
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <main>
        <Switch>
          <Route exact path="/">
            <Carousel/>
            <Home/>
            <Footer/>
          </Route>
          <Route path="/cart/:productId?">
            <Cart/>
          </Route>
          <Route exact path="/productpage/:productId">
            <Productmain/>
          </Route>
          <Route exact path="/productpage/:productId/edit">
            <ProductEdit/>
          </Route>
          <Route path="/shipping">
            <Shippingaddress/>
          </Route>
          <Route path="/payment">
            <Payment/>
          </Route>
          <Route path="/orderhistory">
            <Orderhistory/>
          </Route>
          <Route path="/order/:id">
            <Orderdetails/>
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <PrivateRoute path="/profile" component={Myprofile}></PrivateRoute>
          <AdminRoute path="/productlist" component={ProductList}></AdminRoute>
          <AdminRoute path="/orderlist" component={OrderList}
          ></AdminRoute>
        </Switch>
        </main> 
      </div>
    </BrowserRouter>
  );
}

export default App;
