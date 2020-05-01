import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from '@material-ui/core';
import LockOpenSharpIcon from '@material-ui/icons/LockOpenSharp';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import headphones from '../images/headphones.jpg';


class Landing extends Component {
  render() {    
    return (
      <>
      <div className="App">
        <div className="row">
        <Container maxWidth="sm">   
            <br />
            <br />     
            <img src={headphones} class="center" /> 
            <br />
            <br />
            <Button startIcon={<AssignmentSharpIcon />} size="large" variant="outlined" color="primary">
            <Link to='/register'> Register </Link>
            </Button>
            <span>               </span>
            <Button startIcon={<LockOpenSharpIcon />} size="large" variant="outlined" color="primary">
            <Link to='/login'> Login </Link>
            </Button>
        </Container>
        </div>
      </div>
      </>
    );
  }
}
export default Landing;