import React from "react";
import {Modal, Button } from 'react-bootstrap';
import briefkasten from "../../images/briefkasten.png";

const ModalBriefkasten = props => {
     return(
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={props.showBriefkasten}
                onHide={props.onHide} 
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Einfacher Briefkasten
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 <div className="d-flex justify-space-between flex-wrap p-5">
                    <img src={briefkasten} className="imgBriefkastenModal mr-5"  alt="Einfacher Briefkasten"/>
                    <div>
                       <p><b>Beschreibung</b></p>
                       <ul className="ml-3">
                         <li>Maße (B x H x T): ca. 26,5 x 35 x 8,5 cm</li>
                         <li>Einwurfschlitz (BxH): ca. 22 x 5 cm</li>
                         <li>Klapptür (B x H): ca. 24 x 27,5 cm</li>
                         <li>Material: lackiertes Metall</li>
                       </ul>
                    </div>
                 </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={props.onHide}>Schließen</Button>
                </Modal.Footer>
              </Modal>
        );

}

export default ModalBriefkasten;