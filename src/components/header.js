import React, { Component } from 'react';

import {Navbar, Nav, Button, FormControl, Form} from "react-bootstrap"
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
             <Navbar style={{display :'flex', justifyContent: 'flex-end', alignItems: "center"}}  bg="primary" variant="dark">
             <Nav className="mr-4">
               <Nav.Link href="/" style={{color: "white"}}> </Nav.Link>
               <Nav.Link href="/login" style={{color: "white"}} > Login &nbsp;&nbsp; </Nav.Link>
             </Nav>
             
           </Navbar> );
    }
}
 
export default Header;