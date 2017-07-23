import React, { Component } from 'react';
import '../App.css';
import Product from './Product';
import { Grid, Row, Col, Image } from 'react-bootstrap';

class ProductDetail extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <Row>
          <Col md={2} style={{paddingRight:0}}>
          {
            this.props.thumbnails.map((thumbnail)=>{
              return (<Image src={thumbnail} responsive />)
            })
          }
          </Col>
          <Col md={10}>
            <Image src={this.props.mainImage} style={{width:'100%'}} />
          </Col>
        </Row>
    );
  }
}

export default ProductDetail;