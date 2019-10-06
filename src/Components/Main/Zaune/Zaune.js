import React, {Component} from "react";
import zaun from "../../images/zaune/zaun_auswahl.jpg";
import ResultBox from  "./ResultBox";
import AuswahlProduct from "./AuswahlProdukt";
import {basic} from "./data";
import "../../style/Zaune.css";
import ModalBriefkasten from "./ModalBriefkasten";
import ModalZaunDesc from "./ModalZaunDesc";


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
      montage: "keine",
      preis: 338,
      priceArray: [],
      img_product: basic[0].img_vorschau,
      showBriefkasten: false,
      showZaun: false,
      zaunArt: null,
      imgZaun: null,
      preisZaun: 0,
      preisWidth: 0,
      preisHeight: 0
    }

    componentDidMount(){

        this.state.priceArray[0] = this.state.preis

        this.setState({preisZaun: this.state.preis,
                     
        })
    }

     changeForm = (ev) => {
       let form_gerade =  document.getElementById("gerade");
       let form_convex =  document.getElementById("convex");
       if(ev.titel === "Convex"){
            form_convex.style.display = "block";
            form_gerade.style.display = "none";
            this.setState({form: "Convex"})
       }
       else{
           form_convex.style.display = "none";
           form_gerade.style.display = "block";
           this.setState({form: "Gerade"})
       }
    }

    changeColor = (ev) => {
         let staebe_gerade = document.querySelector(".gerade");
         let staebe_convex =  document.getElementById("convex");
         let latten = document.querySelector(".latten");
         let pfosten = document.getElementById("pfosten");
         let kugel = document.getElementById("kugel");
         let spitz = document.getElementById("spitz");
         let briefrahmen_rechts = document.getElementById("briefrahmen_rechts");
         let briefrahmen_links = document.getElementById("briefrahmen_links");
         let briefbefestigung = document.querySelectorAll(".briefbefestigung");

         staebe_gerade.style.fill = `#${ev.color}`;
         staebe_convex.style.fill = `#${ev.color}`;
         latten.style.fill = `#${ev.color}`;
         pfosten.style.fill = `#${ev.color}`;
         kugel.style.fill = `#${ev.color}`;
         spitz.style.fill = `#${ev.color}`;
         briefrahmen_rechts.style.stroke = `#${ev.color}`;
         briefrahmen_links.style.stroke = `#${ev.color}`;
        
         for(let i = 0; i < briefbefestigung.length; i++){
            briefbefestigung[i].style.fill = `#${ev.color}`;
         }
        
         this.setState({farbe: ev.titel})
    }

    changePfosten = (ev) => {
       let mauer = document.getElementById("mauer");
       let pfosten = document.getElementById("pfosten");
       let kugel = document.getElementById("kugel");
       let spitz = document.getElementById("spitz");

        switch(ev.typ){
            case "Eigene Pfosten oder Mauerwerk":
                this.setState({pfosten: "keine"})
                mauer.style.display = "block";
                pfosten.style.display = "none";
                kugel.style.display = "none";
                spitz.style.display = "none";
                break;
            case "Abdeckplatte - gerade":
                this.setState({pfosten: "Abdeckplatte - gerade"})
                mauer.style.display = "none";
                pfosten.style.display = "block";
                kugel.style.display = "none";
                spitz.style.display = "none";
                break;
            case "Abdeckplatte - spitz":
                this.setState({pfosten: "Abdeckplatte - spitz"})
                mauer.style.display = "none";
                pfosten.style.display = "block";
                kugel.style.display = "none";
                spitz.style.display = "block";
                break;
            case "Abdeckplatte - Kugel":
                this.setState({pfosten: "Abdeckplatte - Kugel"})
                mauer.style.display = "none";
                pfosten.style.display = "block";
                kugel.style.display = "block";
                spitz.style.display = "none";
                break;
            default:
                return ev.typ
        }
    }

    addBriefkasten = (ev) => {
     let briefkasten_rechts = document.querySelector(".briefkasten_rechts");
     let briefkasten_links = document.querySelector(".briefkasten_links");

        switch(ev.direct){
            case "kein":
                this.setState({briefkasten: "kein"});
                briefkasten_rechts.style.display = "none";
                briefkasten_links.style.display = "none";
                break;
            case "links":
                this.setState({briefkasten: "links"});
                briefkasten_links.style.display = "block";
                briefkasten_rechts.style.display = "none";
                break;
            case "rechts":
                this.setState({briefkasten: "rechts"});
                briefkasten_rechts.style.display = "block";
                briefkasten_links.style.display = "none";
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

    changeZaun = ev => {
       this.state.priceArray[0] = ev.price;
        this.setState({
                       muster: ev.titel,
                       preis: this.state.priceArray.reduce((a, b) => a + b, 0),
                       preisZaun: ev.price
                    })
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

        console.log("this.state.preisWidth", this.state.preisWidth)

        this.setState({
            menge: ev.target.value,
            preis: this.state.priceArray.reduce((a, b) => a + b, 0)
        })

        console.log("this.state.priceArray", this.state.priceArray)

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
                        montage={this.state.montage}
                        preis={this.state.preis}
                     />
                 </div>
                 <AuswahlProduct
                  changeForm={this.changeForm}
                  changeColor={this.changeColor}
                  changePfosten={this.changePfosten}
                  addBriefkasten={this.addBriefkasten}
                  showBriefkasteninfo={this.showBriefkasteninfo}
                  openZaunModel={this.openZaunModel}
                  changeZaun={this.changeZaun}
                  changeWidth={this.changeWidth}
                  changeHeight={this.changeHeight}
                  changeQuantity={this.changeQuantity}
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
             </div>
         )
     }
}

export default Zaune;