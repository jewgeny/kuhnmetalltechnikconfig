import React, {Component} from "react";
import ResultBox from  "./ResultBox";
import AuswahlProduct from "./AuswahlProdukt";
import {vorschau} from "./data";
import "../../style/Zaune.css";
import ModalBriefkasten from "./ModalBriefkasten";
import ModalZaunDesc from "./ModalZaunDesc";
import ModalClassic from "./ModalClassic";


class Zaune extends Component {

    state = {
      muster: "Classic - 1101CL",
      masseWidth: "50",
      masseHeight: "100",
      form: "Gerade",
      farbe: "Anthrazitgrau",
      pfosten: "keine",
      menge: 1,
      briefkasten: "kein",
      preis: 338,
      priceArray: [],
      img_product: vorschau[0].img_vorschau,
      showBriefkasten: false,
      showZaun: false,
      zaunArt: null,
      imgZaun: null,
      preisZaun: 0,
      preisWidth: 0,
      preisHeight: 0,
      showClassic: false,
      numberPfosten: 2
    }

    componentDidMount(){

        this.state.priceArray[0] = this.state.preis

        this.setState({preisZaun: this.state.preis,
                     
        })
    }

     changeForm = (ev) => {
       let form_gerade =  document.querySelector("#gerade");
       let form_convex =  document.querySelector("#convex");
       if(ev.titel === "Convex"){
        if(this.state.muster === "Classic - 1101CL"){
            form_convex.style.display = "block";
            form_gerade.style.display = "none";
         }
        this.setState({form: "Convex"})
       }
       else if(ev.titel === "Gerade"){
        if(this.state.muster === "Classic - 1101CL"){
            form_convex.style.display = "none";
            form_gerade.style.display = "block";
         }
        this.setState({form: "Gerade"})
       }
      
    }

    changeColor = (ev) => {
         let kugel = document.querySelector("#kugel");
         let pfosten = document.querySelector("#pfosten");
         let spitze = document.querySelector("#spitze");
         let fill_objekte = [kugel, spitze, pfosten];
         let convex =  document.querySelector("#convex");
         let gerade =  document.querySelector("#gerade");
         let latten =  document.querySelector("#latten");
         let cl_1111_stab = document.querySelector("#cl_1111_stab");
         let cl_1111_latte = document.querySelector("#cl_1111_latte");
         let cl_1111_raute = document.querySelector("#cl_1111_raute");
         let fill_objekte_elemente = [cl_1111_stab, cl_1111_latte, latten];
         let form = [convex, gerade];
         let stroke_objekte = [cl_1111_raute];

         for(let i = 0; i < stroke_objekte.length; i++){
            stroke_objekte[i].style.stroke = `#${ev.color}`;
         }
     
         for(let i = 0; i < fill_objekte_elemente.length; i++){
            fill_objekte_elemente[i].style.fill = `#${ev.color}`;
         }

         for(let i = 0; i < form.length; i++){
             form[i].style.fill = `#${ev.color}`;
          }

         for(let i = 0; i < fill_objekte.length; i++){
            fill_objekte[i].style.fill = `#${ev.color}`;
         }
        

         this.setState({farbe: ev.titel})
    }

    changePfosten = (ev) => {
       let mauer = document.querySelector("#mauer");
       let pfosten = document.querySelector("#pfosten");
       let kugel = document.querySelector("#kugel");

        switch(ev.typ){
            case "Eigene Pfosten oder Mauerwerk":
                this.state.priceArray[4] = 0;
                this.setState({pfosten: "keine",
                            preis: this.state.priceArray.reduce((a, b) => a + b, 0)
                });
                mauer.style.display = "block";
                pfosten.style.display = "none";
                kugel.style.display = "none";

                break;
            case "Abdeckplatte - standard":
                this.state.priceArray[4] = 114 * this.state.numberPfosten;
                this.setState({pfosten: "Abdeckplatte - gerade", 
                               preis: this.state.priceArray.reduce((a, b) => a + b, 0)
                });
                mauer.style.display = "none";
                pfosten.style.display = "block";
                kugel.style.display = "none";
                break;

            case "Abdeckplatte - Kugel":
                this.state.priceArray[4] = 161 * this.state.numberPfosten;
                this.setState({pfosten: "Abdeckplatte - Kugel",
                               preis: this.state.priceArray.reduce((a, b) => a + b, 0)
                });
                mauer.style.display = "none";
                pfosten.style.display = "block";
                kugel.style.display = "block";
                break;
            default:
                return ev.typ
        }
    }

    addBriefkasten = (ev) => {

        switch(ev.direct){
            case "kein":
                this.state.priceArray[3] = 0;
                this.setState({preis: this.state.priceArray.reduce((a, b) => a + b, 0)})
                break;
            case "links":
                this.state.priceArray[3] = 215;
                this.setState({briefkasten: "links",
                preis: this.state.priceArray.reduce((a, b) => a + b, 0)
            });
                break;
            case "rechts":
                    this.state.priceArray[3] = 215;
                this.setState({briefkasten: "rechts",
                preis: this.state.priceArray.reduce((a, b) => a + b, 0)
            });
                break;

            default:
                return ev.direct;
        }
    }

    closeBriefkasten = () => {
        this.setState({showBriefkasten: false})
    }

    showBriefkasteninfo = () => {
        this.setState({showBriefkasten: true})
    }

    openZaunModel = (ev) => {
        this.setState({showZaun: true,
                      zaunArt: ev.titel,
                      imgZaun: ev.img_zaun
        })
    }

    closeZaun = () => {
        this.setState({showZaun: false})
    }

    changeClassicZaun = ev => {
       let cl_1111 = document.querySelector("#cl_1111");
       let cl_1001 = document.querySelector("#cl_1001");

       this.state.priceArray[0] = ev.price;
        this.setState({
                       muster: ev.titel,
                       preis: this.state.priceArray.reduce((a, b) => a + b, 0),
                       preisZaun: ev.price
                    })
            switch(ev.titel){
                case "Classic - 1101CL":
                  cl_1111.style.display = "none";
                  cl_1001.style.display = "block";
                break;
            
                case "Classic - 1103CL":
                  cl_1111.style.display = "none";
                  cl_1001.style.display = "none";
                break;

                case "Classic - 1107CL":
                  cl_1111.style.display = "none";
                  cl_1001.style.display = "none";
                break;

                case "Classic - 1111CL":
                  cl_1111.style.display = "block";
                  cl_1001.style.display = "none";
        
                break;
            
                default:
                    return ev.titel;
                }
    }

    changeWidth = ev => {

        this.setState({masseWidth: ev.target.value})

        switch(ev.target.value){
            case "50":
             this.state.priceArray[1] = 0;
             this.setState({
                preis: this.state.priceArray.reduce((a, b) => a + b, 0),
                preisWidth: 0 
             })
             break;
             case "100":
             this.state.priceArray[1] = 72;
             this.setState({
                preis: this.state.priceArray.reduce((a, b) => a + b, 0),
                preisWidth: 72 
             })
             break;
             case "150":
             this.state.priceArray[1] = 144;
             this.setState({
                preis: this.state.priceArray.reduce((a, b) => a + b, 0),
                preisWidth: 144 
             })
             break;
             case "200":
             this.state.priceArray[1] = 216;
             this.setState({
                preis: this.state.priceArray.reduce((a, b) => a + b, 0),
                preisWidth: 216 
             })
             break;

            default:
                return ev.target.value;
        }

    }

    changeHeight = ev => {
        this.setState({masseHeight: ev.target.value})
        switch(ev.target.value){
            case "100":
             this.state.priceArray[2] = 0;
             this.setState({
                preis: this.state.priceArray.reduce((a, b) => a + b, 0),
                preisHeight: 0
             })
             break;
             case "120":
             this.state.priceArray[2] = 16;
             this.setState({
                preis: this.state.priceArray.reduce((a, b) => a + b, 0),
                preisHeight: 16
             })
             break;
             case "140":
             this.state.priceArray[2] = 32;
             this.setState({
                preis: this.state.priceArray.reduce((a, b) => a + b, 0),
                preisHeight: 32
             })
             break;
             case "160":
             this.state.priceArray[2] = 48;
             this.setState({
                preis: this.state.priceArray.reduce((a, b) => a + b, 0),
                preisHeight: 48
             })
             break;

            default:
                return ev.target.value;
        }

    }

    changeQuantity = ev => {
        let price = ev.target.value;

        //preis objekt
        let tempArrayPreis = [];
        let preisObj = {
            price: this.state.preisZaun,
            quantity: Number(price)
        }
        tempArrayPreis[0] = preisObj;
        let tempPrice = tempArrayPreis.reduce((a, b) => a + b.price * b.quantity, 0);
        this.state.priceArray[0] = tempPrice;

        //preis width objekt
        let tempArrayWidth = [];
        let preisObjWidth = {
          price: this.state.preisWidth,
          quantity: Number(price)
        }
        tempArrayWidth[0] = preisObjWidth;
        let tempPriceWidth = tempArrayWidth.reduce((a, b) => a + b.price * b.quantity, 0);
        this.state.priceArray[1] = tempPriceWidth;

        //preis height objekt
        let tempArrayHeight = [];
        let preisObjHeight = {
            price: this.state.preisHeight,
            quantity: Number(price)
        }
        tempArrayHeight[0] = preisObjHeight;
        let tempPriceHeight = tempArrayHeight.reduce((a, b) => a + b.price * b.quantity, 0);
        this.state.priceArray[2] = tempPriceHeight;

        this.setState({
            menge: ev.target.value,
            numberPfosten: 2 * ev.target.value,
            preis: this.state.priceArray.reduce((a, b) => a + b, 0)
        })

        //console.log("this.state.priceArray", this.state.priceArray)

    }

    showModalClassic = () => {
        this.setState({showClassic: true})
    }

    closeClassic = () => {
        this.setState({showClassic: false})
    }

     render(){
         return(
             <div>
                 <h1>Plane hier deinen einzigartigen Zaun</h1>
                 <hr></hr>
                 <div className="ProductWrapper">
                  {this.state.img_product}
                    <ResultBox 
                        muster={this.state.muster}
                        masseWidth={this.state.masseWidth}
                        masseHeight={this.state.masseHeight}
                        form={this.state.form}
                        farbe={this.state.farbe}
                        pfosten={this.state.pfosten}
                        menge={this.state.menge}
                        briefkasten={this.state.briefkasten}
                        preis={this.state.preis}
                        numberPfosten={this.state.numberPfosten}
                        pfosten={this.state.pfosten}
                     />
                 </div>
                 <AuswahlProduct
                  changeForm={this.changeForm}
                  changeColor={this.changeColor}
                  changePfosten={this.changePfosten}
                  addBriefkasten={this.addBriefkasten}
                  showBriefkasteninfo={this.showBriefkasteninfo}
                  openZaunModel={this.openZaunModel}
                  showModalClassic={this.showModalClassic}
                  changeWidth={this.changeWidth}
                  changeHeight={this.changeHeight}
                  changeQuantity={this.changeQuantity}
                  numberPfosten={this.state.numberPfosten}
                  />
                  <ModalBriefkasten 
                    showBriefkasten={this.state.showBriefkasten}
                    onHide={this.closeBriefkasten} 
                  />
                  <ModalZaunDesc 
                  showZaun={this.state.showZaun}
                  closeZaun={this.closeZaun}
                  zaunArt={this.state.zaunArt}
                  imgZaun={this.state.imgZaun}
                  />
                  <ModalClassic
                  showClassic={this.state.showClassic} 
                  closeClassic={this.closeClassic}
                  changeClassicZaun={this.changeClassicZaun}
                  />
             </div>
         )
     }
}

export default Zaune;