import React, { Component } from 'react';
import './App.css';
import Product from '../ProductComponent/Product';
import ProductImage from './ProductImage';
import { Grid, Row, Col, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class ProductDetail extends Component {
  render() {
    return (
        <Grid style={{marginTop: '30px', marginBottom:'30px'}}>
            <Row>
              <Col md={9}>
                <ProductImage />
              </Col>
              <Col md={3}>
                <h3>yes i'm fine</h3>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.</div><br />
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Size</ControlLabel>
                  <FormControl componentClass="select" placeholder="Please select size">
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="s">M</option>
                    <option value="s">L</option>
                    <option value="s">XL</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Quantity</ControlLabel>
                  <FormControl componentClass="select" placeholder="Please select quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </FormControl>
                </FormGroup>
                <br />
                <Button bsStyle="primary" block>Add to cart</Button>
              </Col>
            </Row>
        </Grid>
    );
  }
}

export default ProductDetail;