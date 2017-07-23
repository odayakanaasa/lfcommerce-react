import React, { Component } from 'react';
import '../App.css';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';

class Product extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Panel className="no-border product-item">
          <div className="product-cover" style={{backgroundImage:`url(${this.props.productImage})`}}></div>
          <br />
          <Row>
              <Col md={8} xs={8}>
                <strong><Link to={this.props.productURL}>{this.props.productName}</Link></strong>
              </Col>
              <Col md={4} xs={4} className="text-right">
              {this.props.productPrice}
              </Col>
          </Row>
      </Panel>
    );
  }
}

export default Product;