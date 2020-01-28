import React from "react";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {musterZaune, form, pfosten, briefkastenList, zaunspitzen_luxus} from "./data.js";
import briefkasten from "../../images/briefkasten2.jpg";
import { FaTools } from "react-icons/fa";
import {Form} from 'react-bootstrap';
import basic_masse from "../../images/zaune/basic/muster_basic_masse.png";
import ReactTooltip from 'react-tooltip';
import { FaInfoCircle } from 'react-icons/fa';
import zaun_convex from "../../images/zaune/zaun_convex.jpg";
import "../../style/AuswahlProduct.scss";


function TabPanel(props) {
    const { children, value, index } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-prevent-tabpanel-${index}`}
        aria-labelledby={`scrollable-prevent-tab-${index}`}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

  const StyledTabs = withStyles({

    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > div': {
        //maxWidth: 80,
        width: '100%',
        backgroundColor: '#1aaecc',
      },
    },
  })(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);


  const AntTab = withStyles(theme => ({
    root: {
      '&$selected': {
        color: '#1aaecc',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#1aaecc',
        outline: "none"

      },
      '&:hover': {
        color: '#1aaecc',
      },
    },
    selected: {},
  }))(props => <Tab disableRipple {...props} />);



export default function AuswahlProduct(props) {
    
      const colors = [
          {color: "3a3838", titel: "Feuerverzinkt"},
          {color: "000000", titel: "Schwarz RAL 9005"},
          {color: "3e484a", titel: "Athrazitgrau RAL 7016"},
          {color: "9CA5AC", titel: "Grau RAL 7040"},
          {color: "8B8C7A", titel: "Steingrau RAL 7030"},
          {color: "FAFAFA", titel: "Weiss RAL 9016"},
          {color: "0A4A80", titel: "Blau RAL 5010"},
          {color: "5E2029", titel: "Weinrot RAL 3005"},
          {color: "2F4538", titel: "Moosgrün RAL 6005"},
          {color: "52443A", titel: "Braun RAL 8014"},
      ]
    
    let quantArray = [];
    for(let i = 1; i <= 100; i++){
        quantArray.push(i)
    }
 
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = index => {
      setValue(index);
    };
  
    return (
      <div className="ProductPanel">
        <AppBar position="static" color="default">
          <StyledTabs
               value={value}
               onChange={handleChange}
               variant="scrollable"
               scrollButtons="off"
               aria-label="scrollable prevent tabs example"
          >
            <AntTab className="tabs" label="Muster" {...a11yProps(0)} />
            <AntTab className="tabs" label="Maße/Menge" {...a11yProps(1)} />
            <AntTab className="tabs" label="Form" {...a11yProps(2)} />
            <AntTab className="tabs" label="Farbe" {...a11yProps(3)} />
            <AntTab className="tabs" label="Spitzen" {...a11yProps(4)} />
            <AntTab className="tabs" label="Pfosten" {...a11yProps(5)} />
            <AntTab className="tabs" label="Briefkasten" {...a11yProps(6)} />
            <AntTab className="tabs" label="Montage" {...a11yProps(7)} />
          </StyledTabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {/* Muster */}
          <TabPanel value={value} index={0} dir={theme.direction}>
              <div className="d-flex flex-wrap productWrapper">
                   {musterZaune.map((elem, index) => {
                       return(
                            <div key={index} className="d-flex flex-column justify-content-center align-items-center m-3">
                                 <img className="zaunMuster" src={elem.img_zaun} alt={elem.titel} />
                                    <p className="zaunTitel">{elem.titel}</p>
                                 <span className="">
                                    <button onClick={() => props.showModalZaun(elem)} className="buttonAuswahl">Auswahl</button>
                                    <button onClick={() => props.openZaunModel(elem)} className="buttonAuswahl">Infomartion</button>
                                 </span>
                            </div>
                       )
                   })}
              </div>
          </TabPanel>
         
          {/* Masse/Menge */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="d-flex flex-wrap">
               <img src={basic_masse} className="zaunAuswahl" alt="Basic Zaun - Masse" />
               <Form className="mx-5">
                   <Form.Group controlId="formWidth">
                        <Form.Label>Breite</Form.Label>
                        <Form.Control style={{width: "200px"}}  onChange={props.changeWidth} as="select">
                            <option value="50">50 cm</option>
                            <option value="100">100 cm</option>
                            <option value="150">150 cm</option>
                            <option value="200">200 cm</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formHeight">
                        <Form.Label>Höhe</Form.Label>
                        <Form.Control style={{width: "200px"}} onChange={props.changeHeight} as="select">
                            <option value="100">100 cm</option>
                            <option value="120">120 cm</option>
                            <option value="140">140 cm</option>
                            <option value="160">160 cm</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formHeight">
                        <Form.Label>Menge</Form.Label>
                        <Form.Control style={{width: "200px"}} onChange={props.changeQuantity} as="select">
                         {quantArray.map((elem, index) => {
                             return(
                                <option key={index} value={elem}>{elem}</option>
                             )
                         })}
                            
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
          </TabPanel>
        
         {/* Form */}
          <TabPanel value={value} index={2} dir={theme.direction}>
          <div className="d-flex flex-wrap productWrapper">
          {props.isForm ?
              
                   form.map((elem, index) => {
                       return(
                        <div key={index}>
                           
                                <div  className="d-flex flex-column justify-content-center align-items-center m-3 pb-5">
                                    <img className="zaunForm" src={elem.img_form} alt={elem.titel} />
                                    <p className="zaunTitel">{elem.titel} {elem.titel === "Mit Bogen" && <a data-tip data-for='happyFace'> <FaInfoCircle style={{color: "#1aaecc", marginBottom: "1px", cursor: "pointer"}} /> </a>}</p>
                                        <ReactTooltip id='happyFace' place="right" type='light'>
                                            <img src={zaun_convex} alt="Beispielbild" />
                                            <p style={{fontSize: "16px", textAlign: "right"}}>Beispielbild</p>
                                        </ReactTooltip>
                                    <button onClick={() => props.changeForm(index, elem)} className="buttonAuswahl buttonAuswahlForm">Auswählen</button>
                                </div>
                          </div>
                       )
                   })
               
                  : <p className="ml-3">Diese Option ist für dieses Zaunmuster nicht verfügbar.</p>
              }
              </div>
          </TabPanel>
        
         {/* Farbe */}
          <TabPanel value={value} index={3} dir={theme.direction}>
          <div className="d-flex flex-wrap">
                   {colors.map((elem, index) => {
                       return(
                         <div className="mx-1 mb-3 text-center" key={index}>
                            <div onClick={() => props.changeColor(index, elem)} style={{background: `#${elem.color}`, cursor: "pointer" , width: "130px", height: "130px"}} >
                            </div>
                            <p className="pColors">{elem.titel}</p>
                             <button onClick={() => props.changeColor(index,elem)} className="buttonAuswahl buttonAuswahlColor">Auswählen</button>
                        </div>
                       )
                   })}
              </div>
          </TabPanel>
        
         {/* Spitzen */}
          <TabPanel value={value} index={4} dir={theme.direction}>
              <div className="d-flex flex-wrap" style={{position: "relative"}}>
              {zaunspitzen_luxus.map((elem, index) => {
                                            return(
                                            <div id="spitzen" key={index} className="d-flex flex-column align-items-center">
                                                {elem.titel === "keine" ? <p style={{marginTop: "30px", marginBottom: "55px"}}>keine Spitzen</p> 
                                                : 
                                                <img onClick={() => props.changeZaunspitze(index, elem)} src={elem.img} className="zaunspitzen" alt={elem.titel}/>}
                                                <input type="radio" value={elem.titel} onClick={() => props.changeZaunspitze(index, elem)} className="zaunspitzenInput"  /*style={{position: elem.titel === "keine" && "absolute", left: "35px", bottom: "0"}}*/ name="zaunspitzen"  id={elem.titel}/>
                                            </div>
                                            )
                                        })}
              </div>
          </TabPanel>
        
         {/* Pfosten */}
          <TabPanel value={value} index={5} dir={theme.direction}>
          <div className="d-flex flex-wrap">
                   {pfosten.map((elem, index) => {
                       return(
                         <div className="d-flex flex-column align-items-center justify-content-center mr-5" style={{position: "relative"}} key={index}>
                            <img style={{position: elem.typ === "Eigene Pfosten oder Mauerwerk" && "absolute", top: "0", left: "30px"}} className="imgPfosten" src={elem.img} alt={elem.titel} />
                            {elem.typ !== "Eigene Pfosten oder Mauerwerk" ? <p className="pPfosten m-0 mt-2 p-0">{props.numberPfosten} x Stahlpfosten</p> : <p className="pPfosten my-5 p-1"></p>} 
                           <p className="pPfosten">{elem.typ}</p>
                           {elem.typ !== "Eigene Pfosten oder Mauerwerk" ? <p className=""> {elem.preis.toFixed(2)} EUR / St.</p> : <p className="mb-4 pb-3"></p>} 
                           {elem.typ !== "Eigene Pfosten oder Mauerwerk" ?
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <label className="input-group-text" htmlFor="inputGroupSelect01">Stück</label>
                                </div>
                                <select value={props.numberPfosten} onChange={props.setNumberPfosten} className="custom-select" id="inputGroupSelect01">
                                  <option defaultValue>Auswählen</option>
                                  {quantArray.map((number, index) => {
                                   return  <option key={index} value={number}>{number}</option>
                                    })
                                  }
                                </select>
                              </div>
                              :null}
                             <button onClick={() => props.changePfosten(index, elem)} style={{position: elem.typ === "Eigene Pfosten oder Mauerwerk" && "absolute", bottom: "0", left: "40px"}} className="buttonAuswahl buttonAuswahlPfosten">Auswählen</button>
                        </div>
                       )
                   })}
              </div>
          </TabPanel>
       
        {/* Briefkasten */}
          <TabPanel value={value} index={6} dir={theme.direction}>
          <div className="d-flex flex-wrap">
                   {briefkastenList.map((elem, index) => {
                       return(
                         <div className="d-flex flex-column align-items-center justify-content-center mb-3 mr-4" key={index}>
                            <img className="imgBriefkasten" src={elem.img} alt={elem.direct} />
                            <p className="pPfosten">{elem.direct}</p>
                             <button onClick={() => props.addBriefkasten(index, elem)} className="buttonAuswahl buttonAuswahlBriefkasten">Auswählen</button>
                        </div>
                       )
                   })}

              <div className="d-flex flex-column align-items-center justify-content-center">
                            <img className="imgBriefkastenProduct" src={briefkasten} alt="Briefkasten" />
                            <p className="m-0 py-3">Integrierter Briefkasten</p>
                             <button onClick={props.showBriefkasteninfo} className="buttonAuswahl">Information</button>
                        </div>
              </div>
          </TabPanel>

           {/* Montage */}
          <TabPanel value={value} index={7} dir={theme.direction}>
              <div className="montageWrapper">
                <FaTools className="icon_montage" />
                <p>
                    Die Montage (mit einbetonieren oder eindübeln) für alle Zaunfelder ist in dem Preis bereits inbegriffen.
                    Auch die Kosten für die Anfahrt sind bereits im Preis enthalten, solange sich das Objekt in der Region Hamburg
                    oder Schleswig Holstein befindet. Alles andere auf Anfrage.

                </p>
             </div>
          </TabPanel>
        </SwipeableViews>
      </div>
    );
  }
  