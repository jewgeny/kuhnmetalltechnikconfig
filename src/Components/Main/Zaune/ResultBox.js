import React from "react";

const ResultBox = (props) => {
    return(
        <div className="ResultBox">
           <p className="aktutelleVorauswahl">Ihre aktuelle Vorauswahl:</p>
        <div className="auswahlBox">
            <div className="productProperties">
                <p className="properties">Muster:</p>
                <p className="properties">Maße:</p>
                <p className="properties">Form:</p>
                <p className="properties">Farbe:</p>
                <p className="properties">Pfosten:</p>
                <p className="properties">Menge:</p>
                <p className="properties">Briefkasten:</p>
                <p className="properties">Montage:</p>
            </div>

            <div className="productValues">
                <p className="properties">{props.muster}</p>
                <p className="properties">{props.masseWidth} cm x {props.masseHeight} cm</p>
                <p className="properties">{props.form}</p>
                <p className="properties">{props.farbe}</p>
                <p className="properties">{props.pfosten}</p>
                <p className="properties">{props.menge}</p>
                <p className="properties">{props.briefkasten}</p>
                <p className="properties">{props.montage}</p>
            </div>

        </div>
        
        <hr className="resulthr"></hr>
        <p className="aktuellerPreis"><b>Aktueller Preis:</b> {props.preis.toFixed(2)} EUR <span className="mwst">zzgl. MwSt. und inkl. Montage</span></p>

        <div className="resultButtonWrapper">
                 <button className="buttonResult">Angebot herunderladen</button>
                 <button className="buttonResult">Unverbindliche Anfrage</button>
        </div>

    </div>
    )
}

export default ResultBox;