import React, { Component } from 'react';
import '../../App.css';
import { 
    ListGroup, ListGroupItem,
    Image, Breadcrumb, Grid, Row, Col,
    FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CustomerList extends Component {
  render() {
    return (
        <Grid style={{marginBottom:'30px'}}>
            <h3>Customers</h3>
            <Breadcrumb>
                <Breadcrumb.Item href="/admin/dashboard">
                Dashboard
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                Customers
                </Breadcrumb.Item>
            </Breadcrumb>
            <Row>
            <Col md={12}>
            <ListGroup>
                <ListGroupItem>
                    <Row>
                        <Col md={2}>
                            Nicholas Chen
                        </Col>
                        <Col md={8}>
                            nicholas_chan82@hotmail.com
                        </Col>
                        <Col md={2}>
                        Delete
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col md={2}>
                            Nicholas Chen
                        </Col>
                        <Col md={8}>
                            nicholas_chan82@hotmail.com
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
        </Grid>)
  }
}

export default CustomerList;