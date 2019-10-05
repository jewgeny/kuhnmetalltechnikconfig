import React from "react";
import "../style/Auswahl.scss";
import zaun from "../images/zaune/zaun_auswahl.jpg";
import tor from "../images/tore/tore_auswahl.jpg";
import gelaender from "../images/gelaender/gelaender.jpg";
import balkongelaender from "../images/balkongelaender/balkon_auswahl.jpg";
import vordach from "../images/vordaecher/vordach_auswahl.jpg";
import sichtschutz from "../images/sichtschutz/sichtschutz_auswahl.jpg";
import {Link} from "react-router-dom";

const Auswahl = (props) => {

    const auswahlProducts = [
        {image: zaun, titel: "Zäüne", path: "zaune"},
        {image: tor, titel: "Tore", path: "tore"},
        {image: gelaender, titel: "Geländer & Handläufe", path: "gelaender"},
        {image: balkongelaender, titel: "Balkongeländer", path: "balkongelaender"},
        {image: vordach, titel: "Vordächer", path: "vordaecher"},
        {image: sichtschutz, titel: "Sichtschutz", path: "sichtschutz"}
    ];

    return(
         <div className="AuswahlWrapper mb-3">
              <h2>Auswahl</h2>
              <hr className="mb-5"></hr>
             <div className="productWrapper  m-auto d-flex flex-wrap justify-content-center col-10">
                 {auswahlProducts.map((product, index) => {
                      return(
                        <Link to={product.path} key={index} className="navlink">
                          <div>
                              <img className="imgAuswahl" src={product.image} alt={product.titel} />
                              <h2>{product.titel}</h2>
                          </div>
                        </Link>
                      )
                 })}
             </div>
         </div>
    )
}

export default Auswahl;