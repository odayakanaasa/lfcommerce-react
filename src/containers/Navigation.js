import React, { Component } from 'react';
import '../App.css';
import { 
    Navbar, Nav, NavItem, NavDropdown,
    MenuItem, Badge, Grid, Row, Col,
    FormGroup, FormControl, Button } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';
import Login from './Login';

class Navigation extends Component {
  constructor(props){
      super(props);
      this.state = {
        showLogin: false
      }
  }
  openLogin = (e, data)=>{
    this.setState({
      showLogin: !this.state.showLogin,
    })
  }
  render() {
    if(window.location.pathname.indexOf('/admin') === -1){
        return (
            <div style={{borderBottom:'1px solid #eee'}}>
                <Navbar>
                    <Grid>
                        <Row>
                            <Col md={3}></Col>
                            <Col md={6}>
                                <Navbar.Form>
                                    <FormGroup className="inner-addon left-addon">
                                        <i className="glyphicon glyphicon-search"></i>
                                        <FormControl type="text" placeholder="Search products, design" />
                                    </FormGroup>
                                </Navbar.Form>
                            </Col>
                            <Col md={3}>                                
                                <Nav pullRight>   
                                    <Link to="/cart">
                                        <span className="navbar-text">                                
                                            <span className="glyphicon glyphicon-shopping-cart"></span><Badge className="badge-danger">3</Badge>                                
                                        </span>
                                    </Link>         
                                    <NavDropdown eventKey={3} title="Nicholas Chen" id="basic-nav-dropdown">
                                        <MenuItem eventKey={3.1} href="/account">My Account</MenuItem>
                                        <MenuItem eventKey={3.2} href="/cart">Cart <Badge className="badge-danger">3</Badge></MenuItem>
                                        <MenuItem eventKey={3.3}>Log Out</MenuItem>
                                    </NavDropdown>
                                </Nav>                                
                            </Col>
                        </Row>
                    </Grid>            
                </Navbar>
                <Navbar className="sub-nav">
                    <Grid>
                        <Row>
                            <Col md={4}>
                                <Navbar.Header>
                                    <Navbar.Brand>
                                        <Link to="/"><i className="fa fa-smile-o" aria-hidden="true"></i>&nbsp;
                                        LF Commerce</Link>
                                    </Navbar.Brand>
                                </Navbar.Header>
                            </Col>
                            <Col md={8}>
                                <Nav>
                                    <NavItem eventKey={1} href="/categories/geeks">GEEKS</NavItem>
                                    <NavItem eventKey={2} href="/categories/funny">FUNNY</NavItem>
                                    <NavItem eventKey={3} href="/categories/kids">KIDS</NavItem>
                                    <NavItem eventKey={4} href="/categories/pets">PETS</NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </Grid>
                </Navbar>
                <Login show={this.state.showLogin} />
            </div>
        
        );
    }else{
        return(
        <div>
            <Navbar>
                <Grid>
                    <Row>
                        <Col md={3}> 
                            <Navbar.Header>
                                <Navbar.Brand>
                            <Link to="/"><i className="fa fa-smile-o" aria-hidden="true"></i>&nbsp;
                            LF Commerce</Link>
                                </Navbar.Brand>
                            </Navbar.Header>
                        </Col>
                        <Col md={6}>
                        </Col>
                        <Col md={3}>
                            <Nav pullRight>            
                                <NavDropdown eventKey={3} title="Nicholas Chen" id="basic-nav-dropdown">
                                    <MenuItem eventKey={3.1} onClick={this.openLogin}>My Account</MenuItem>
                                    <MenuItem eventKey={3.2}>Cart <Badge className="badge-danger">3</Badge></MenuItem>
                                    <MenuItem eventKey={3.3}>Log Out</MenuItem>
                                </NavDropdown>
                            </Nav>
                        </Col>
                    </Row>
                </Grid>            
            </Navbar>
        </div>
        )
    }
  }
}

export default Navigation;