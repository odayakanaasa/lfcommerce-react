import React, { Component } from 'react';
import './App.css';
import { 
    Table, Image, Breadcrumb, Grid, Row, Col,
    FormGroup, FormControl, Button, Pagination } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';

class OrderList extends Component {
  constructor(props){
      super(props)
      this.state = {activePage: 1}
  }
  render() {
    return (
        <Grid style={{marginBottom:'30px', height:'90vh'}}>
            <h3>Orders</h3>
            <Breadcrumb>
                <Breadcrumb.Item href="/admin/dashboard">
                Dashboard
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                Orders
                </Breadcrumb.Item>
            </Breadcrumb>
            <Row>
            <Col md={12}>
            <Table condensed responsive>
                <thead>
                <tr>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                </tbody>
            </Table>
            <Pagination
                bsSize="small"
                items={10}
                activePage={this.state.activePage}
                onSelect={this.handleSelect} />
            </Col>
        </Row>
    </Grid>)
  }
}

export default OrderList;