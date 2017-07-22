import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col, Form, FormGroup, FormControl, Modal, Button } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom'

class Login extends Component {
  render() {
    return (
         <Modal bsSize="large" show={this.props.show} aria-labelledby="contained-modal-title-lg">
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Grid>
                    <Row>
                        <Col md={6}>
                            <Form horizontal>
                                <FormGroup controlId="formHorizontalEmail">
                                <Col sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" placeholder="Email" />
                                </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                <Col sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="Password" />
                                </Col>
                                </FormGroup>

                                <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit">
                                    Sign in
                                    </Button>
                                </Col>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md={6}>
                            
                        </Col>
                    </Row>
                </Grid>  
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>                  
    );
  }
}

export default Login;