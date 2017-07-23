import React, { Component } from 'react';
import '../App.css';
import PopularProductList from '../containers/PopularProductList';
import NewProductList from '../containers/NewProductList';
import { Grid, Row, Col } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
        <div style={{marginTop: '30px'}}>
            <PopularProductList />
            <NewProductList />
        </div>
    );
  }
}

export default Home;