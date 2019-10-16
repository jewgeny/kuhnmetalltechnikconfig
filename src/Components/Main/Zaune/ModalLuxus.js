import React from "react";
import {Modal, Button } from 'react-bootstrap';
import {muster_luxus_zaune, zaunspitzen_luxus} from "./data";
import { Dropdown } from 'react-bootstrap';


const ModalLuxus = props => {
     return(
            <Modal
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={props.showLuxus}
                onHide={props.closeLuxus} 
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Zäune - Luxus
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                     <div className="d-flex flex-wrap">

                        {muster_luxus_zaune.map((elem, index) => {
                            return(
                          
                                <div key={index} className="d-flex flex-column justify-space-between zaunAuswahlWrapper m-3">
                                    <img className="imgModalAuswahl m-auto" onClick={() => props.changeLuxusZaun(index, elem)} src={elem.img_zaun} alt={elem.titel} />
                                     <div className="priceProductWrapper">
                                         <p>{elem.titel}</p>
                                         <p>{elem.price.toFixed(2)} EUR</p>
                                    </div>
                                      <div className="d-flex align-items-center justify-content-space-between">
                                        <button onClick={() => props.changeLuxusZaun(index, elem)} className="buttonAuswahl buttonAuswahlLuxus m-auto">Auswählen</button>

                                    <Dropdown>
                                        <Dropdown.Toggle className="buttonToggle" id="dropdown-basic">
                                        Zaunspitzen
                                        </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <div className="wrapperZaunspitzen">
                                        {zaunspitzen_luxus.map((elem, index) => {
                                            return(
                                            <div key={index} className="d-flex flex-column align-items-center">
                                                <img onClick={() => props.changeZaunspitze(index, elem)} src={elem.img} className="zaunspitzen" alt={elem.titel}/>
                                                <input type="radio" value={elem.titel} onClick={() => props.changeZaunspitze(index, elem)} className="zaunspitzenInput" name="zaunspitzen"  id={elem.titel}/>
                                            </div>
                                            )
                                        })}
                                    </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    </div>
                            </div>
                        )
                        })}
                     </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={props.closeLuxus}>Schließen</Button>
                </Modal.Footer>
              </Modal>
        );

}

export default ModalLuxus;