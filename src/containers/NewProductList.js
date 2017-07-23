import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css';
import Product from '../components/Product';
import { Grid, Row, Col } from 'react-bootstrap';

class NewProductList extends Component {
  render() {
    return (
        <div style={{marginTop: '30px'}}>
            <div className="text-center headline">
                New Arrivals
            </div>
            <Grid>
                <Row className="show-grid">
                {this.props.newProducts.map(function(product) {
                    return (<Col key={product.productURL} md={3}>
                                <Product productName={product.productName}
                                        productURL={product.productURL}
                                        productImage={product.productImage}
                                        productPrice={product.productPrice} />
                            </Col>)
                    })
                }
                </Row>
            </Grid>
        </div>
    );
  }
}

function mapStateToProps(state){
    return{
        newProducts: state.newProducts,
    }
}

export default connect(mapStateToProps)(NewProductList);