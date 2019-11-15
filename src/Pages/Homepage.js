import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,FormControl,Nav,Navbar,Jumbotron} from 'react-bootstrap';

const navbar = ()=>{
  return(
<Navbar >
    <Navbar.Brand href="/">Fitch</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link href="/collaborate">Collaborate</Nav.Link>
      <Nav.Link href="/community">Community</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-info">Sign Up</Button>
        <Button variant="outline-info">Login</Button>
    </Form>
  </Navbar>
)
};

class Homepage extends Component{
  render(){
    return(
    <div>
    {navbar()}
    </div>
)
}

};

export default Homepage;
