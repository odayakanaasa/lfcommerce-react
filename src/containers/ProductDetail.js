import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductImage from '../components/ProductImage';
import { Grid, Row, Col, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import '../App.css';

class ProductDetail extends Component {
  render() {
    return (
        <Grid style={{marginTop: '30px', marginBottom:'30px'}}>
            <Row>
              <Col md={9}>
                <ProductImage 
                  mainImage={this.props.productDetail.productImage}
                  thumbnails={this.props.productDetail.productThumbnails} />
              </Col>
              <Col md={3} className="bg-white padding-bottom-20">
                <h3>{this.props.productDetail.productName}</h3>
                <h3 className="price">{this.props.productDetail.productPrice}</h3>
                <div>{this.props.productDetail.productDescription}</div><br />
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

function mapStateToProps(state){
    return{
        productDetail: state.productDetail,
    }
}

export default connect(mapStateToProps)(ProductDetail);