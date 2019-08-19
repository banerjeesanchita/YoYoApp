import React, { Component } from 'react'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'


export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    
    render() {
        return (
            <div>
            <div className="navbar1">
                <Link to="/gift">
                     <img src={logo} alt="Gift store"></img>
                     </Link>
                </div>     
           
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                     
                     <button type="button" className="nav-bar" 
                     onClick={this.handleToggle}>
                         <FaAlignRight className="nav-icon"></FaAlignRight>
                     </button>
                </div>
            
            <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>    
                <li>
                    <Link to="/gift">Giftss</Link>
                </li>
                  <li>
                      <Link to="/home">Home</Link>
                  </li>
            </ul>
            </div>
        </nav>
        </div>
        )
    }
}
