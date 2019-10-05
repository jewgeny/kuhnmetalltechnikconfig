import React from "react";
import {Modal, Button } from 'react-bootstrap';


const ModalZaunDesc = props => {
     return(
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={props.showZaun}
                onHide={props.closeZaun} 
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    {props.zaunArt}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 <div className="d-flex justify-space-between flex-wrap p-5">
                    <img src={props.imgZaun} className="imgZaunModal mr-5"  alt={props.zaunTitel}/>
                    <div>
                       <p><b>Beschreibung</b></p>
                       <ul className="ml-3">
                         <li>feuerverzinkt und pulverbeschichtet</li>
                       </ul>
                    </div>
                 </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={props.closeZaun}>Schließen</Button>
                </Modal.Footer>
              </Modal>
        );

}

export default ModalZaunDesc;