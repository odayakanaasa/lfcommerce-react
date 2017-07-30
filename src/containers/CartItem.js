import React, { Component } from 'react';
import { Row, Col, Button, Image, FormGroup, FormControl } from 'react-bootstrap';
import '../App.css';

class CartItem extends Component {
  render() {
    return (
      <Row>
        <Col md={8}>
          <Row>
            <Col md={3}>
              <Image src={this.props.productImage} responsive />
            </Col>
            <Col md={9}>
              <strong><a href={this.props.productURL}>{this.props.productName}</a></strong>
            </Col> 
          </Row>                   
        </Col>
        <Col md={2}>
          <strong className="price">{this.props.productPrice}</strong>
        </Col>
        <Col md={2}>
          <FormGroup>
            <FormControl type="text" placeholder="0" value={this.props.productQuantity} />
          </FormGroup>
          Delete
        </Col>
      </Row>   
    );
  }
}

export default CartItem;