import React, {Component} from "react";
import logo from "../images/logo.svg";
import "../style/Header.scss";
import Nav from "./Nav";
import {Link} from "react-router-dom"; 

class Header extends Component {
     render(){
         return(
             <header>
                 <div className="logoWrapper">
                     <Link to="/"><img className="logo" src={logo} alt="logo metalltechnik kuhn" /></Link>
                     <span className="tagline"></span>
                     <p className="config">Konfigurator</p>
                 </div>
                 <Nav />


             </header>
         )
     }
}

export default Header;