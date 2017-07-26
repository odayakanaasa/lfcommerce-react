import React, { Component } from 'react';
import '../App.css';
import { 
    ListGroup, ListGroupItem,
    Image, Breadcrumb, Grid, Row, Col,
    FormGroup, FormControl, Button } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';
import Product from './Product';
import sampleProducts from '../../samples/SampleProducts';

class ProductList extends Component {
  render() {
    return (
        <Grid style={{marginTop:'30px', marginBottom:'30px'}}>
            <Row className="show-grid">
                {sampleProducts.map(function(product) {
                    return (<Col key={product.productURL} md={3}>
                                <Product productName={product.productName}
                                        productURL={product.productURL}
                                        productImage={product.productImage}
                                        productPrice={product.productPrice} />
                            </Col>)
                    })
                }
            </Row>
            <Button bsStyle="primary" style={{float:'right'}}>Checkout</Button>
        </Grid>)
  }
}

export default ProductList;