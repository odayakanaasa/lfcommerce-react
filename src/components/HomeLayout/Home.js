import React, { Component } from 'react';
import './App.css';
import Product from '../ProductComponent/Product';
import { Grid, Row, Col } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
        <div style={{marginTop: '30px'}}>
            <div className="text-center headline">
                Popular
            </div>
            <Grid>
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
                        <Product />
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
            </Grid>
            <div className="text-center headline">
                New Products
            </div>
            <Grid>
                <Row className="show-grid">
                    <Col md={3}>
                        <Product />
                    </Col>
                    <Col md={3}>
                        <Product />
                    </Col>
                    <Col md={3}>
                        <Product />
                    </Col>
                    <Col md={3}>
                        <Product />
                    </Col>
                    <Col md={3}>
                        <Product />
                    </Col>
                    <Col md={3}>
                        <Product />
                    </Col><Col md={3}>
                        <Product />
                    </Col>
                    <Col md={3}>
                        <Product />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}

export default Home;