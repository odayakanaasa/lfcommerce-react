import React, { Component } from 'react';
import './App.css';
import Product from '../ProductComponent/Product';
import { Grid, Row, Col } from 'react-bootstrap';
import SampleProducts from '../../samples/SampleProducts';

class Home extends Component {
  render() {
    return (
        <div style={{marginTop: '30px'}}>
            <div className="text-center headline">
                Popular
            </div>
            <Grid>
                <Row className="show-grid">
                {SampleProducts.map(function(product) {
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
            <div className="text-center headline">
                New Products
            </div>
            <Grid>
                <Row className="show-grid">
                    {SampleProducts.map(function(product) {
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

export default Home;