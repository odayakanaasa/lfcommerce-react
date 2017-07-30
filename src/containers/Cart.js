import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { ListGroup, ListGroupItem, Grid, Row, Col, Button, Image } from 'react-bootstrap';
import CartItem from './CartItem';
import '../App.css';

class Cart extends Component {
  render() {
    return (
      <Grid style={{marginTop: '30px', marginBottom:'30px'}}>
        <div className="text-center lead">
          My Shopping Cart
        </div>
        <Row>
          <Col md={12}>
            <ListGroup>
              {
                this.props.cart.map((cartItem)=>{
                  return (<ListGroupItem>
                            <CartItem 
                              productImage={cartItem.productImage} 
                              productName={cartItem.productName}
                              productUrl={cartItem.productUrl}
                              productPrice={cartItem.productPrice}
                              productQuantity={cartItem.productQuantity} />
                          </ListGroupItem>)
                })
              }
            </ListGroup>
          </Col>
        </Row>
        <Button bsStyle="primary" style={{float:'right'}}>Checkout</Button>
      </Grid>
    );
  }
}

function mapStateToProps(state){
    return{
        cart: state.cart,
    }
}

export default connect(mapStateToProps)(Cart);