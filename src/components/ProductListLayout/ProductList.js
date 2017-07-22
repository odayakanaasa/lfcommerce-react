import React, { Component } from 'react';
import './App.css';
import { 
    ListGroup, ListGroupItem,
    Image, Breadcrumb, Grid, Row, Col,
    FormGroup, FormControl, Button } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';
import Product from '../ProductComponent/Product';

class ProductList extends Component {
  render() {
    return (
        <Grid style={{marginTop:'30px', marginBottom:'30px'}}>
            <Row className="show-grid">
                <Col md={3}>
                    <Product productName="Test Product 1"
                             productURL="products/test-product-1"
                             productImage="https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg"
                             productPrice="$12.90" />
                </Col>
                <Col md={3}>
                    <Product productName="Test Product 1"
                             productURL="products/test-product-1"
                             productImage="https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg"
                             productPrice="$12.90" />
                </Col>
                <Col md={3}>
                    <Product productName="Test Product 1"
                             productURL="products/test-product-1"
                             productImage="https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg"
                             productPrice="$12.90" />
                </Col>
                <Col md={3}>
                    <Product productName="Test Product 1"
                             productURL="products/test-product-1"
                             productImage="https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg"
                             productPrice="$12.90" />
                </Col>
                <Col md={3}>
                    <Product productName="Test Product 1"
                             productURL="products/test-product-1"
                             productImage="https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg"
                             productPrice="$12.90" />
                </Col>
                <Col md={3}>
                    <Product productName="Test Product 1"
                             productURL="products/test-product-1"
                             productImage="https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg"
                             productPrice="$12.90" />
                </Col><Col md={3}>
                    <Product productName="Test Product 1"
                             productURL="products/test-product-1"
                             productImage="https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg"
                             productPrice="$12.90" />
                </Col>
                <Col md={3}>
                    <Product productName="Test Product 1"
                             productURL="products/test-product-1"
                             productImage="https://image.spreadshirtmedia.com/image-server/v1/products/1003716746/views/1,width=800,height=800,appearanceId=1,backgroundColor=fff,version=1485256808/i-eat-ass-t-shirt-men-s-t-shirt.jpg"
                             productPrice="$12.90" />
                </Col>
            </Row>
            <Button bsStyle="primary" style={{float:'right'}}>Checkout</Button>
        </Grid>)
  }
}

export default ProductList;