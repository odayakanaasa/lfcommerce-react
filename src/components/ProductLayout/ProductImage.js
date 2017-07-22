import React, { Component } from 'react';
import './App.css';
import Product from '../ProductComponent/Product';
import { Grid, Row, Col, Image } from 'react-bootstrap';

class ProductDetail extends Component {
  render() {
    return (
        <Row>
          <Col md={2} style={{paddingRight:0}}>
            <Image src="https://ih0.redbubble.net/image.343722178.1092/rab,womens_tshirt,x1350,fafafa:ca443f4786,back-c,30,60,940,730-bg,f8f8f8.lite-1u3.jpg" responsive /><br />
            <Image src="https://ih1.redbubble.net/image.343722178.1092/raf,750x1000,075,t,fafafa:ca443f4786.u3.jpg" responsive />
          </Col>
          <Col md={10}>
            <Image src="https://ih0.redbubble.net/image.343722178.1092/ra,womens_tshirt,x3104,fafafa:ca443f4786,front-c,650,630,900,975-bg,f8f8f8.u3.jpg" style={{width:'100%'}} />
          </Col>
        </Row>
    );
  }
}

export default ProductDetail;