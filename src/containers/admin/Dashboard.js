import React, { Component } from 'react';
import '../../App.css';
import { 
    ListGroup, ListGroupItem,
    Image, Breadcrumb, Grid, Row, Col,
    FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <Grid style={{marginTop: '30px', marginBottom: '30px', height:'90vh'}}>
        <h3>Modules</h3>
        <Row>
          <Col md={2} className="text-center">
            <Link to="/admin/orders"><div style={{width:'100%', height:'100px', backgroundColor:'silver',lineHeight:'100px'}}>10 Orders</div></Link>
          </Col>
          <Col md={2} className="text-center">
             <Link to="/admin/customers"><div style={{width:'100%', height:'100px', backgroundColor:'silver',lineHeight:'100px'}}>10 Customers</div></Link>
           </Col>
          <Col md={2} className="text-center">
             <Link to="/admin/products"><div style={{width:'100%', height:'100px', backgroundColor:'silver',lineHeight:'100px'}}>10 Products</div></Link>
           </Col>
          <Col md={2} className="text-center">
             <Link to="/admin/payment"><div style={{width:'100%', height:'100px', backgroundColor:'silver',lineHeight:'100px'}}>2 Payment</div></Link>
           </Col>
        </Row>
      </Grid>           
    );
  }
}

export default Dashboard;