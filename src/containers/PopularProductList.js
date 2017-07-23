import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addProduct} from '../actions';
import {bindActionCreators} from 'redux';
import Product from '../components/Product';
import { Grid, Row, Col } from 'react-bootstrap';
import '../App.css';

class PopularProductList extends Component {
  render() {
    return (
        <div style={{marginTop: '30px'}}>
            <div className="text-center headline">
                Popular
            </div>
            <Grid>
                <Row className="show-grid">
                {this.props.popularProducts.map((product) => {
                    return (<Col onClick={()=>this.props.addProduct(product)}
                                 key={product.productURL} md={3}>
                                <Product 
                                    productName={product.productName}
                                    productURL={product.productURL}
                                    productImage={product.productImage}
                                    productPrice={product.productPrice}/>
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
        popularProducts: state.popularProducts,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addProduct}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularProductList);