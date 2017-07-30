import React, { Component } from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import '../App.css';

class CartItem extends Component {
  render() {
    return (
      <Row>
        <Col md={2}>
          <Image src={this.props.productImage} responsive />
        </Col>
        <Col md={8}>
          <div><strong>{this.props.productName}</strong></div>
        </Col>
        <Col md={2}>
          Delete
        </Col>
      </Row>   
    );
  }
}

export default CartItem;