import React, {Component} from "react";
import ResultBox from  "./ResultBox";
import AuswahlProduct from "./AuswahlProdukt";
import {vorschau} from "./data";
import "../../style/Zaune.css";
import ModalBriefkasten from "./ModalBriefkasten";
import ModalZaunDesc from "./ModalZaunDesc";
import ModalClassic from "./ModalClassic";
import ModalLuxus from "./ModalLuxus";
import jsPDF from 'jspdf';
import image2base64 from "image-to-base64";
import img_basic_muster from "../../images/zaune/basic/muster_basic.png";

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
      numberPfosten: 2,
      isForm: true,
      showLuxus: false,
      tempZaunSpitze: "Zaunspitze - 41351",
      zaunspitze: "keine",
      indexZaunspitze: 0,
      classicZaune: null,
      luxusZaune: null,
      zaunspitzen: null,
      zaunspitzen_lu_1229: null,
      zaunspitzen_lu_1230: null,
      showZaunspitzen: false,
      pdfZaun: img_basic_muster
    }

    componentDidMount(){

       /* classic Zäune */
       let cl_1101 =  document.querySelector("#cl_1101");
       let cl_1102 =  document.querySelector("#cl_1102");
       let cl_1103 =  document.querySelector("#cl_1103");
       let cl_1107 =  document.querySelector("#cl_1107");
       let cl_1111 =  document.querySelector("#cl_1111");
       let cl_1112 =  document.querySelector("#cl_1112");
       let cl_1117 =  document.querySelector("#cl_1117");
       let classicZaune = [cl_1101, cl_1102, cl_1103, cl_1107, cl_1111, cl_1112, cl_1117];
      /* end classic zäune */

      /* luxus */
        let lu_1201 = document.querySelector("#lu_1201");
        let lu_1208 = document.querySelector("#lu_1208");
        let lu_1209 = document.querySelector("#lu_1209");
        let lu_1210 = document.querySelector("#lu_1210");
        let lu_1211 = document.querySelector("#lu_1211");
        let lu_1212 = document.querySelector("#lu_1212");
        let lu_1213 = document.querySelector("#lu_1213");
        let lu_1229 = document.querySelector("#lu_1229");
        let lu_1230 = document.querySelector("#lu_1230");
        let luxusZaune = [lu_1201, lu_1208, lu_1209, lu_1210, lu_1211, lu_1212, lu_1213, lu_1229, lu_1230];
    /* end luxus */

      /* zaunspitzen */
        let zaunspitze_41351 = document.querySelector("#zaunspitze_41351");
        let zaunspitze_41334 = document.querySelector("#zaunspitze_41334");
        let zaunspitze_41345 = document.querySelector("#zaunspitze_41345");
        let zaunspitze_41363 = document.querySelector("#zaunspitze_41363");
        let zaunspitzen = [zaunspitze_41351, zaunspitze_41334, zaunspitze_41345, zaunspitze_41363];
      /* end zaunspitzen */

      /* zaunspitzen lu 1229 */
        let zaunspitze_lu1229_41351 = document.querySelector("#zaunspitze_lu1229_41351");
        let zaunspitze_lu1229_41345 = document.querySelector("#zaunspitze_lu1229_41345");
        let zaunspitze_lu1229_41363 = document.querySelector("#zaunspitze_lu1229_41363");
        let zaunspitze_1229_41334 = document.querySelector("#zaunspitze_1229_41334");
        let zaunspitzen_lu_1229 = [zaunspitze_lu1229_41351, zaunspitze_1229_41334, zaunspitze_lu1229_41345, zaunspitze_lu1229_41363];
        /* end zaunspitzen lu 1229 */

        /* zaunspitzen lu 1230 */
        let zaunspitze_lu1230_41351 = document.querySelector("#zaunspitze_lu1230_41351");
        let zaunspitze_lu1230_41345 = document.querySelector("#zaunspitze_lu1230_41345");
        let zaunspitze_lu1230_41363 = document.querySelector("#zaunspitze_lu1230_41363");
        let zaunspitze_1230_41334 = document.querySelector("#zaunspitze_1230_41334");
        let zaunspitzen_lu_1230 = [zaunspitze_lu1230_41351, zaunspitze_1230_41334, zaunspitze_lu1230_41345, zaunspitze_lu1230_41363];
        /* end zaunspitzen lu 1230 */

        this.state.priceArray[0] = this.state.preis
        this.setState({preisZaun: this.state.preis,
                       classicZaune,
                       zaunspitzen,
                       luxusZaune,
                       zaunspitzen_lu_1229,
                       zaunspitzen_lu_1230,
        })

         /* convert logo img to base64      */
         image2base64(`${this.state.pdfZaun}`) 
          .then(
            (response) => {
                  this.setState({pdfZaun: response})
                  }
              )
              .catch(
                  (error) => {
                      console.log(error); //Exepection error....
                  }
              )
            /* end convert logo img to base64      */
    }



     changeForm = (index, ev) => {
        let buttonAuswahlForm = document.querySelectorAll(".buttonAuswahlForm");
        for(let i = 0; i < buttonAuswahlForm.length; i++){
            buttonAuswahlForm[i].innerHTML = "Auswählen";
            buttonAuswahlForm[i].classList.remove("buttonAusgewaehlt");
         }
         buttonAuswahlForm[index].innerHTML = "Ausgewählt";
         buttonAuswahlForm[index].classList.add("buttonAusgewaehlt");

       let form_convex =  document.querySelector("#convex");
       if(ev.titel === "Convex"){
        if(this.state.muster === "Classic - 1101CL" ||  this.state.muster === "Classic - 1107CL" ||  this.state.muster === "Classic - 1103CL"){
            form_convex.style.display = "block";
            this.setState({form: "Convex"})
         }
       
       }
       else if(ev.titel === "Gerade"){
        if(this.state.muster === "Classic - 1101CL" ||  this.state.muster === "Classic - 1107CL" ||  this.state.muster === "Classic - 1103CL"){
            form_convex.style.display = "none";
            this.setState({form: "Gerade"})
         }
       }
       else{
        this.setState({form: "Gerade"}) 
       }
      
    }

    changeColor = (index, ev) => {
        /* change button */
        let buttonAuswahlColor = document.querySelectorAll(".buttonAuswahlColor");
        for(let i = 0; i < buttonAuswahlColor.length; i++){
            buttonAuswahlColor[i].innerHTML = "Auswählen";
            buttonAuswahlColor[i].classList.remove("buttonAusgewaehlt");
         }
         buttonAuswahlColor[index].innerHTML = "Ausgewählt";
         buttonAuswahlColor[index].classList.add("buttonAusgewaehlt");
          /* end change button */
        
         /* elemente */
         let kugel = document.querySelector("#kugel");
         let pfosten = document.querySelector("#pfosten");
         let convex =  document.querySelector("#convex");
         let fill_objekte_elemente = [kugel, pfosten, convex];
        /* ende elemente */

        /* classic */
        let cl_1117_rauten =  document.querySelector("#cl_1117_rauten");
        let classicZaune = this.state.classicZaune;
        /* end classic */

        /* luxus */
        let luxusZaune = this.state.luxusZaune;
        /* end luxus */

        /* zaunspitzen */
        let zaunspitzenArray = this.state.zaunspitzen;
        /* end zaunspitzen */

        /* zaunspitzen lu 1229 */
        let zaunspitzen_lu_1229 = this.state.zaunspitzen_lu_1229;
        /* end zaunspitzen lu 1229 */

        /* zaunspitzen lu 1230 */
        let zaunspitzen_lu_1230 = this.state.zaunspitzen_lu_1230;
        /* end zaunspitzen lu 1230 */

        let stroke_objekte = [cl_1117_rauten];

        /* result array of all products */
        let resultArray = [];
        resultArray = resultArray.concat(fill_objekte_elemente, classicZaune, luxusZaune, zaunspitzenArray, zaunspitzen_lu_1229, zaunspitzen_lu_1230);
        /* end result array of all products */

         for(let i = 0; i < stroke_objekte.length; i++){
            stroke_objekte[i].style.stroke = `#${ev.color}`;
         }
     
         for(let i = 0; i < resultArray.length; i++){
            resultArray[i].style.fill = `#${ev.color}`;
         }

         this.setState({farbe: ev.titel})
    }

    changePfosten = (index, ev) => {
        /* change button */
        let buttonAuswahlPfosten = document.querySelectorAll(".buttonAuswahlPfosten");
        for(let i = 0; i < buttonAuswahlPfosten.length; i++){
            buttonAuswahlPfosten[i].innerHTML = "Auswählen";
            buttonAuswahlPfosten[i].classList.remove("buttonAusgewaehlt");
         }
         buttonAuswahlPfosten[index].innerHTML = "Ausgewählt";
         buttonAuswahlPfosten[index].classList.add("buttonAusgewaehlt");
          /* end change button */
          
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

    addBriefkasten = (index, ev) => {
         /* change button */
         let buttonAuswahlBriefkasten = document.querySelectorAll(".buttonAuswahlBriefkasten");
         for(let i = 0; i < buttonAuswahlBriefkasten.length; i++){
            buttonAuswahlBriefkasten[i].innerHTML = "Auswählen";
            buttonAuswahlBriefkasten[i].classList.remove("buttonAusgewaehlt");
          }
          buttonAuswahlBriefkasten[index].innerHTML = "Ausgewählt";
          buttonAuswahlBriefkasten[index].classList.add("buttonAusgewaehlt");
           /* end change button */

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

    openLuxusModel = () => {
        this.setState({showLuxus: true}) 
    }

    closeLuxus = () => {
        this.setState({showLuxus: false})
    }

    changeClassicZaun = (index, ev) => {
        /* change button */
       let buttonAuswahlClassic = document.querySelectorAll(".buttonAuswahlClassic");
       for(let i = 0; i < buttonAuswahlClassic.length; i++){
        buttonAuswahlClassic[i].innerHTML = "Auswählen";
        buttonAuswahlClassic[i].classList.remove("buttonAusgewaehlt");
       }
       buttonAuswahlClassic[index].innerHTML = "Ausgewählt";
       buttonAuswahlClassic[index].classList.add("buttonAusgewaehlt");
       /* end change button */

       /* img Zaun */
       let imgZaun = ev.img_zaun;
       /* end img Zaun */
       
      /* zaunspitzen */
      let zaunspitzen = this.state.zaunspitzen;
      /* end zaunspitzen */

      /* convex */
      let form_convex = document.querySelector("#convex");

      /* luxus Zäune */
      let luxusZaune = this.state.luxusZaune;
      /* end luxus Zäune */

     /* classic Zäune */
     let classicZaune = this.state.classicZaune;
     /* end classic Zäune */

      /* totalArray of all products */
      let totalArray = [];
      totalArray = totalArray.concat(zaunspitzen, luxusZaune, classicZaune);
      /* end totalArray of all products*/

      for(let i = 0; i < totalArray.length; i++){
        totalArray[i].style.display = "none";
     }

       this.state.priceArray[0] = ev.price;
        this.setState({
                       muster: ev.titel,
                       preis: this.state.priceArray.reduce((a, b) => a + b, 0),
                       preisZaun: ev.price,
                       showZaunspitzen: false,
                       pdfZaun: imgZaun
                    })
            switch(ev.titel){
                case "Classic - 1101CL":
                 for(let i = 0; i < totalArray.length; i++){
                    totalArray[i].style.display = "none";
                 }
                 this.setState({isForm: true, zaunspitze: "keine"})
                 classicZaune[index].style.display = "block";
                break;

                case "Classic - 1102CL":
                   for(let i = 0; i < totalArray.length; i++){
                        totalArray[i].style.display = "none";
                    }
                 this.setState({isForm: false, form: "Gerade", zaunspitze: "keine"})
                 form_convex.style.display = "none";
                 classicZaune[index].style.display = "block";
                break;
            
                case "Classic - 1103CL":
                   for(let i = 0; i < totalArray.length; i++){
                        totalArray[i].style.display = "none";
                    }
                  form_convex.style.display = "none";
                  classicZaune[index].style.display = "block";
                  this.setState({isForm: true, zaunspitze: "keine"})
                break;

                case "Classic - 1107CL":
                    for(let i = 0; i < totalArray.length; i++){
                        totalArray[i].style.display = "none";
                     }
                    this.setState({isForm: true, zaunspitze: "keine"})
                    classicZaune[index].style.display = "block";
                break;

                case "Classic - 1111CL":
                    for(let i = 0; i < totalArray.length; i++){
                        totalArray[i].style.display = "none";
                    }
                    form_convex.style.display = "none";
                    this.setState({isForm: false, form: "Gerade", zaunspitze: "keine"})
                    classicZaune[index].style.display = "block";
                break;

                case "Classic - 1112CL":
                    for(let i = 0; i < totalArray.length; i++){
                        totalArray[i].style.display = "none";
                    }
                    form_convex.style.display = "none";
                    this.setState({isForm: false, form: "Gerade", zaunspitze: "keine"})
                    classicZaune[index].style.display = "block";
                break;

                case "Classic - 1117CL":
                    for(let i = 0; i < totalArray.length; i++){
                        totalArray[i].style.display = "none";
                    }
                    form_convex.style.display = "none";
                    this.setState({isForm: false, form: "Gerade", zaunspitze: "keine"})
                    classicZaune[index].style.display = "block";
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

    showModalZaun = (ev) => {

        switch(ev.typ){
            case "classic":
             this.setState({showClassic: true})
             break;
            case "luxus":
             this.setState({showLuxus: true})
             break;
            default:
                return ev.typ;
        }
       
    }

    closeClassic = () => {
        this.setState({showClassic: false})
    }

    changeZaunspitze = (index, ev) => {
        
        let zaunspitzen = document.querySelectorAll(".zaunspitzenInput");
        zaunspitzen[index].checked = true;
        
        /* zaunspitzen */
        let zaunspitzenArray = this.state.zaunspitzen;
        /* end zaunspitzen */

        /* zaunspitzen lu 1229 */
        let zaunspitzenArray_lu_1229 = this.state.zaunspitzen_lu_1229;
        /* end zaunspitzen lu 1229 */

         /* zaunspitzen lu 1230 */
         let zaunspitzenArray_lu_1230 = this.state.zaunspitzen_lu_1230;
         /* end zaunspitzen lu 1230 */


         /* result array of all products */
         let resultArray = [];
         resultArray = resultArray.concat(zaunspitzenArray, zaunspitzenArray_lu_1229, zaunspitzenArray_lu_1230);
         for(let i = 0; i < resultArray.length; i++){
            resultArray[i].style.display = "none";
         }
         /* end result array of all products */
         if(this.state.showZaunspitzen){
            zaunspitzenArray[index].style.display = "block";
         }

        this.setState({indexZaunspitze: index, showZaunspitzen: false})

        switch(ev.titel){
            case "Zaunspitze - 41334":
                    this.setState({tempZaunSpitze: "Zaunspitze - 41334"});
            break;
            case "Zaunspitze - 41345":
                    this.setState({tempZaunSpitze: "Zaunspitze - 41345"});
            break;
            case "Zaunspitze - 41351":
                    this.setState({tempZaunSpitze: "Zaunspitze - 41351"});
            break;
            case "Zaunspitze - 41363":
                    this.setState({tempZaunSpitze: "Zaunspitze - 41363"});
            break;
            default:
                return ev.titel;
        }

        switch(this.state.muster){
            case "Luxus - 1229LU":
                    for(let i = 0; i < resultArray.length; i++){
                        resultArray[i].style.display = "none";
                     }
                    zaunspitzenArray_lu_1229[index].style.display = "block";
            break;
            case "Luxus - 1230LU":
                    for(let i = 0; i < resultArray.length; i++){
                        resultArray[i].style.display = "none";
                     }
                    zaunspitzenArray_lu_1230[index].style.display = "block";
            break;
            default:
                return this.state.muster;
        }

    }

    changeLuxusZaun = (index, ev) => {
        /* change button */
       let buttonAuswahlLuxus = document.querySelectorAll(".buttonAuswahlLuxus");
       for(let i = 0; i < buttonAuswahlLuxus.length; i++){
        buttonAuswahlLuxus[i].innerHTML = "Auswählen";
        buttonAuswahlLuxus[i].classList.remove("buttonAusgewaehlt");
       }
       buttonAuswahlLuxus[index].innerHTML = "Ausgewählt";
       buttonAuswahlLuxus[index].classList.add("buttonAusgewaehlt");
       /* end change button */

        /*  classic Zäune*/
        let form_convex =  document.querySelector("#convex");
        let classicZeune = this.state.classicZaune;
        form_convex.style.display = "none";
         /* end classic Zäune*/

         /* luxus Zäune */
         let luxusZauneArray = this.state.luxusZaune;
          /* end luxus Zäune */

        /* zaunspitzen */
        let zaunspitzenArray = this.state.zaunspitzen;
         /* end zaunspitzen */

         /* zaunspitzen lu 1229 */
         let zaunspitzenArray_lu_1229 = this.state.zaunspitzen_lu_1229;
         /* end zaunspitzen lu 1229 */

        /* zaunspitzen lu 1230 */
        let zaunspitzenArray_lu_1230 = this.state.zaunspitzen_lu_1230;
        /* end zaunspitzen lu 1230 */

        /* result array of all products */
         let resultArray = [];
         resultArray = resultArray.concat(classicZeune, luxusZauneArray, zaunspitzenArray, zaunspitzenArray_lu_1229, zaunspitzenArray_lu_1230);
        /* end result array of all products */
        for(let i = 0; i < resultArray.length; i++){
            resultArray[i].style.display = "none";
        }

        luxusZauneArray[index].style.display = "block";
        zaunspitzenArray[this.state.indexZaunspitze].style.display = "block";

        this.state.priceArray[0] = ev.price;
        this.setState({
                       muster: ev.titel,
                       preis: this.state.priceArray.reduce((a, b) => a + b, 0),
                       preisZaun: ev.price,
                       zaunspitze: this.state.tempZaunSpitze,
                       isForm: false,
                       showZaunspitzen: true,
                       pdfZaun: ev.img_zaun
        })


        switch(ev.titel){
            case "Luxus - 1229LU":
                for(let i = 0; i < resultArray.length; i++){
                    resultArray[i].style.display = "none";
                }
                zaunspitzenArray_lu_1229[this.state.indexZaunspitze].style.display = "block";
                luxusZauneArray[index].style.display = "block";
            break;
            case "Luxus - 1230LU":
                for(let i = 0; i < resultArray.length; i++){
                    resultArray[i].style.display = "none";
                }
                zaunspitzenArray_lu_1230[this.state.indexZaunspitze].style.display = "block";
                luxusZauneArray[index].style.display = "block";
            break;
            default:
                return ev.titel;
        }

    }

    createAngebot = () => {
        let pdf = new jsPDF("p", "mm", "a4");
        pdf.text(`Angebot für das Zaunfeld: ${this.state.muster}`, 20, 20);
        /* Linie */
        pdf.setDrawColor(0, 0, 0);                 // Farbe für Linien als RGB-Werte
        pdf.setLineWidth(.3);                          // Breite der Linie in mm
        pdf.line(20, 23, 130, 23); 
        /* add image */
        pdf.addImage(this.state.pdfZaun, 'PNG',  20, 30, 100, 60);

        /* beschreibung */
        pdf.text ("Beschreibung", 20, 105);

        pdf.setFillColor(233, 233, 233);
        pdf.rect(20, 110, 140, 68, "F");

        /* leistungen */
        let pfosten = `${this.state.numberPfosten} x ${this.state.pfosten}`
        let leistungen = `<ul>`+
                           `<li>Muster: ${this.state.muster}</li>`+
                           `<li>Menge: ${this.state.menge}</li>`+
                           `<li>Maße: ${this.state.masseWidth} cm x ${this.state.masseHeight} cm </li>`+
                           `<li>Form: ${this.state.form}</li>`+
                           `<li>Farbe: ${this.state.farbe}</li>`+
                           `<li>Pfosten: ${this.state.pfosten === "keine" ? this.state.pfosten : pfosten}</li>`+
                           `<li>Zaunspitze: ${this.state.zaunspitze}</li>`+
                           `<li>Briefkasten: ${this.state.briefkasten}</li>`+
                         `</ul>`
        let source = leistungen;
        pdf.fromHTML(
            source, // HTML string or DOM elem ref.
            20, // x coord
            112, {
            // y coord
            // max width of content on PDF
            },
        );
        /* end leistungen */
        
         /* Linie */
         pdf.setDrawColor(0, 0, 0);                 // Farbe für Linien als RGB-Werte
         pdf.setLineWidth(.2);                          // Breite der Linie in mm
         pdf.line(20, 193, 125, 193); 
        /* Preis */
        pdf.setFontSize(13);  
        pdf.text(`Preis: ${this.state.preis.toFixed(2)} EUR zzgl. MwSt. und inkl. Montage`, 20, 200);
 
        /* Linie */
        pdf.setDrawColor(0, 0, 0);                 // Farbe für Linien als RGB-Werte
        pdf.setLineWidth(.2);                          // Breite der Linie in mm
        pdf.line(20, 205, 125, 205); 

        pdf.save('Angebot.pdf');
    }


     render(){
         return(
             <div>
                 <h1>Plane hier deinen einzigartigen Zaun</h1>
                 <hr></hr>
                 <div className="ProductWrapper">
                 <span className="imgZaun">{this.state.img_product}</span>
                  
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
                        zaunspitze={this.state.zaunspitze}
                        createAngebot={this.createAngebot}
                     />
                 </div>
                 <AuswahlProduct
                  changeForm={this.changeForm}
                  changeColor={this.changeColor}
                  changePfosten={this.changePfosten}
                  addBriefkasten={this.addBriefkasten}
                  showBriefkasteninfo={this.showBriefkasteninfo}
                  openZaunModel={this.openZaunModel}
                  showModalZaun={this.showModalZaun}
                  changeWidth={this.changeWidth}
                  changeHeight={this.changeHeight}
                  changeQuantity={this.changeQuantity}
                  numberPfosten={this.state.numberPfosten}
                  isForm={this.state.isForm}
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

                  <ModalLuxus
                    openLuxusModel={this.state.openLuxusModel}
                    closeLuxus={this.closeLuxus}
                    showLuxus={this.state.showLuxus}
                    isZaunspitzen={this.state.isZaunspitzen}
                    changeZaunspitze={this.changeZaunspitze}
                    changeLuxusZaun={this.changeLuxusZaun}
                  />
             </div>
         )
     }
}

export default Zaune;