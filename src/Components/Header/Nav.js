import React from "react";
import "../style/Nav.scss";

const Nav  = (props) => {
   return(
       <nav>
            <ul className="ulNav">
                <li>Startseite</li>
                <li>Zäune</li>
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