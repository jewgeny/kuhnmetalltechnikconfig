import React from "react";
import {Modal, Button } from 'react-bootstrap';
import {muster_classic_zaune} from "./data";

const ModalClassic = props => {
     return(
            <Modal
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={props.showClassic}
                onHide={props.closeClassic} 
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Zäune - Classic
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <div className="d-flex flex-wrap justify-content-center">
                        {muster_classic_zaune.map((elem, index) => {
                            return(
                                <div key={index} className="d-flex flex-column justify-content-center zaunAuswahlWrapper m-3">
                                    <img className="imgModalAuswahl" onClick={() => props.changeClassicZaun(index, elem)} src={elem.img_zaun} alt={elem.titel} />
                                     <div className="priceProductWrapper">
                                         <p>{elem.titel}</p>
                                         <p>{elem.price.toFixed(2)} EUR</p>
                                    </div>
                                    <button onClick={() => props.changeClassicZaun(index, elem)} identindex={index} className="buttonAuswahl buttonAuswahlClassic m-auto">Auswählen</button>
                                </div>
                            )
                        })}
                     </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={props.closeClassic}>Schließen</Button>
                </Modal.Footer>
              </Modal>
        );

}

export default ModalClassic;