import React, { Component } from 'react';
import '../App.css';
import { ListGroup, ListGroupItem, Grid, Row, Col, Button, Image } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';

class CartItemList extends Component {
  render() {
    return (
      <Grid style={{marginTop: '30px', marginBottom:'30px'}}>
        <div className="text-center lead">
          My Shopping Cart
        </div>
        <Row>
          <Col md={12}>
          <ListGroup>
            <ListGroupItem>
              <Row>
                <Col md={2}>
                  <Image src="https://ih1.redbubble.net/image.394321805.2445/ra,kids_tee,x1250,FFFFFF:97ab1c12de,front-pad,940x940,ffffff.jpg" responsive />
                </Col>
                <Col md={8}>
                  <div><strong>The Chicago Dog</strong></div>
                </Col>
                <Col md={2}>
                  Delete
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col md={2}>
                  <Image src="https://ih0.redbubble.net/image.388613725.8271/tb,1200x1200,small.2.jpg" responsive />
                </Col>
                <Col md={8}>
                  <div><strong>The Chicago Dog</strong></div>
                </Col>
                <Col md={2}>
                  Delete
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
          </Col>
        </Row>
        <Button bsStyle="primary" style={{float:'right'}}>Checkout</Button>
      </Grid>
    );
  }
}

export default CartItemList;