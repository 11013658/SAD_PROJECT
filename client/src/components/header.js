import React, { Component } from 'react';
import backgroundImg from './images/h.jpg';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className="header">
                <img src={backgroundImg}/> 
                <br />
                <h1> Ḛ℧⍴ℋ◍ทậ ♬</h1>           
            </div>
            </>
         );
    }
}

export default Header;