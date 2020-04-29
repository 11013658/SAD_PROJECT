import React, { Component } from 'react';
import backgroundImg from './images/h.jpg';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className="header">
                <img src={backgroundImg}/> 
                <h1> Euphona </h1>           
            </div>
            </>
         );
    }
}

export default Header;