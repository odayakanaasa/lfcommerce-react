import React, { Component } from 'react';
import './App.css';
import Home from './components/HomeLayout/Home';
import ProductDetail from './components/ProductLayout/ProductDetail';
import Cart from './components/CartComponent/Cart';
import Navigation from './components/NavigationComponent/Navigation';
import Footer from './components/FooterComponent/Footer';
import ProductList from './components/ProductListLayout/ProductList';
import AdminDashboard from './admin/components/DashboardLayout/Dashboard';
import AdminProductList from './admin/components/ProductListLayout/ProductList';
import AdminCustomerList from './admin/components/CustomerListLayout/CustomerList';
import AdminOrderList from './admin/components/OrderListLayout/OrderList';
import {combineReducers, createStore} from 'redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={Home}/>
          <Route path="/categories/:id" component={ProductList}/>
          <Route path="/products/:id" component={ProductDetail}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/admin" render={() => (
              <Redirect to="/admin/dashboard"/>
          )}/>
          <Route path="/admin/dashboard" component={AdminDashboard}/>
          <Route path="/admin/products" component={AdminProductList}/>
          <Route path="/admin/orders" component={AdminOrderList}/>
          <Route path="/admin/customers" component={AdminCustomerList}/>
          <Footer />
        </div>
        
      </Router>
    );
  }
}

export default App;
