import React from "react";
import "../style/Nav.scss";
import {NavLink} from "react-router-dom";

const Nav  = (props) => {
   return(
       <nav>
            <ul className="ulNav">
            <NavLink className="link"  exact={true} activeClassName="active" to="/"><li>Startseite</li></NavLink>
            <NavLink className="link"   activeClassName="active" to="/zaune"><li>Zäune</li></NavLink>
                <li>Geländer & Handläufe</li>
                <li>Balkongeländer</li>
                <li>Tore</li>
                <li>Vordächer</li>
                <li>Sichtschutz</li>
            </ul>
       </nav>
   )
}

export default Nav;