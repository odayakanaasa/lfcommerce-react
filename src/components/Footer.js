import React, { Component } from 'react';
import '../App.css';
import {Grid, Row, Col } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
        <div className="footer">
            <Grid>
                <Row>
                    <Col md={3} />
                    <Col md={6} className="text-center">
                        <a href="/about">About</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="/shipping">Shipping</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="/return-policy">Return Policy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="/terms">Terms</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="/help">Help</a>
                    </Col>
                    <Col md={3} />
                </Row><br /><br />
                <Row>
                    <Col md={12} className="text-center">
                        <small style={{color: '#eee'}}>&copy; LF Commerce</small>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}

export default Footer;