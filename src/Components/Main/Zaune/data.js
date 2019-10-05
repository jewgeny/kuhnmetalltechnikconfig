import React from "react";

//imports basic 
import basic_masse from "../../images/zaune/basic/muster_basic_masse.png";
import {img_basic_vorschau} from "../../images/zaune/basic/image_vorschau";
import img_basic_muster from "../../images/zaune/basic/muster_basic.png";
import img_basic_convex from "../../images/zaune/basic/muster_basic_convex.png";

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

//basic 
export const basic = [
    {img_masse: basic_masse, img_vorschau: img_basic_vorschau, img_muster: img_basic_muster}
]