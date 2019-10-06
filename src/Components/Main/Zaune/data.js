import React from "react";

//imports basic 
import {img_basic_vorschau} from "../../images/zaune/basic/image_vorschau";
import img_basic_muster from "../../images/zaune/basic/muster_basic.png";
import img_basic_classic from "../../images/zaune/basic/muster_classic.jpg";
import img_basic_convex from "../../images/zaune/basic/muster_basic_convex.png";
import img_cl_1103 from "../../images/zaune/basic/cl_1103.png";
import img_cl_1107 from "../../images/zaune/basic/cl_1107.png";

//imports luxus
import img_luxus_muster from "../../images/zaune/luxus/luxus_muster.jpg";

//imports modern
import img_modern_muster from "../../images/zaune/modern/modern_muster.jpg";

//import abdeckkappe
import img_pfosten_gerade from "../../images/zaune/basic/pfosten_gerade.png";
import img_pfosten_spitz from "../../images/zaune/basic/pfosten_spitz.png";
import img_pfosten_kugel from "../../images/zaune/basic/pfosten_rund.png";
import img_pfosten_ohne from "../../images/zaune/basic/pfosten_ohne.png";

//import breifkasten
import briefkasten_links from "../../images/zaune/basic/briefkasten_links.png";
import briefkasten_rechts from "../../images/zaune/basic/briefkasten_rechts.png";
import briefkasten_ohne from "../../images/zaune/basic/briefkasten_ohne.png";

//briefkasten
export const briefkastenList = [
    {img: briefkasten_ohne, direct: "kein" },
    {img: briefkasten_links, direct: "links" },
    {img: briefkasten_rechts, direct: "rechts" }
]

//abdeckplatten
export const pfosten = [
    {typ: "Eigene Pfosten oder Mauerwerk", img: img_pfosten_ohne, desc: "Wenn gemauerte oder eigene Pfosten vorhanden sind", preis: 0, },
    {typ: "Abdeckplatte - gerade", img: img_pfosten_gerade,  desc: "", preis: 0, },
    {typ: "Abdeckplatte - spitz", img: img_pfosten_spitz,  desc: "", preis: 0, },
    {typ: "Abdeckplatte - Kugel", img: img_pfosten_kugel,  desc: "", preis: 0, }
]


//form
export const form = [
    {img_form: img_basic_muster, titel: "Gerade"},
    {img_form: img_basic_convex, titel: "Convex" }
];

//vorschau zäune
export const vorschau = [
    {img_vorschau: img_basic_vorschau}
]

//muster zäune
export const musterZaune = [
    {img_zaun: img_basic_classic, titel: "Classic"},
    {img_zaun: img_luxus_muster, titel: "Luxus"},
    {img_zaun: img_modern_muster, titel: "Modern"},
]

//muster classic zäune
export const muster_classic_zaune = [
    {img_zaun: img_basic_muster, titel: "Classic - 1101CL", price: 338},
    {img_zaun: img_cl_1103, titel: "Classic - 1103CL", price: 385},
    {img_zaun: img_cl_1107, titel: "Classic - 1107CL", price: 385}
]