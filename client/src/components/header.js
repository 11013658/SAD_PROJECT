import React, { Component } from 'react';
import backgroundImg from './images/header.jpg';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className="header">
                <img src={backgroundImg} />            
            </div>
            </>
         );
    }
}

export default Header;