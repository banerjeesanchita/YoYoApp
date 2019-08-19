import React, { Component } from 'react'
import logo from '../components/images/GC-logo-web-2.png'
import {FaAlignRight,FaBars,FaCartPlus} from 'react-icons/fa'
import {Link} from 'react-router-dom'


export default class Navbar extends Component {
    state={
        isOpen:false,
        isSidebaropen:false
    }
    handleToggle=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
      
    }
    handleSideBar=()=>{
        this.setState({
            isSidebaropen:!this.state.isSidebaropen
        })
    }

    
    render() {
        return (
            
               
            
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                
                    <Link to="/gift">
                        <img src={logo} alt="Gift store"></img>
                        </Link>
                       
                        <button type="button" className="nav-btn" 
                        onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"></FaAlignRight>
                        </button>

                        
                    </div>
                    
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>    
                    <li>
                        <Link to="/gift">Gifts</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                </ul>
                <button type="button" className="cart-items"
                        onClick={this.handleSideBar}>
                            <FaBars ></FaBars>
                        </button>
                </div>
            </nav>
           
        )
    }
}
