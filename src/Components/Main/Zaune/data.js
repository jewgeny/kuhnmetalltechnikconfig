
//imports classic 
import {img_basic_vorschau} from "../../images/zaune/basic/image_vorschau";
import img_basic_muster from "../../images/zaune/basic/muster_basic.png";
import img_basic_classic from "../../images/zaune/basic/muster_classic.jpg";
import img_basic_convex from "../../images/zaune/basic/muster_basic_convex_neu.png";
import img_cl_1103 from "../../images/zaune/basic/cl_1103.png";
import img_cl_1107 from "../../images/zaune/basic/cl_1107.png";
import img_cl_1111 from "../../images/zaune/basic/cl_1111.png";
import img_cl_1112 from "../../images/zaune/basic/cl_1112.png";
import img_cl_1117 from "../../images/zaune/basic/cl_1117.png";
import img_cl_1102 from "../../images/zaune/basic/cl_1102.png";

//imports zaunspitzen luxus
import img_zaunspitze_41334 from "../../images/zaune/luxus/zaunspitzen/zaunspitze_41334.jpg";
import img_zaunspitze_41345 from "../../images/zaune/luxus/zaunspitzen/zaunspitze_41345.jpg";
import img_zaunspitze_41351 from "../../images/zaune/luxus/zaunspitzen/zaunspitze_41351.jpg";
import img_zaunspitze_41363 from "../../images/zaune/luxus/zaunspitzen/zaunspitze_41363.jpg";

//imports luxus
import img_luxus_muster from "../../images/zaune/luxus/luxus_muster.jpg";
import img_lu_1201 from "../../images/zaune/luxus/lu_1201.png";
import img_lu_1208 from "../../images/zaune/luxus/lu_1208.png";
import img_lu_1209 from "../../images/zaune/luxus/lu_1209.png";
import img_lu_1210 from "../../images/zaune/luxus/lu_1210.png";
import img_lu_1211 from "../../images/zaune/luxus/lu_1211.png";
import img_lu_1212 from "../../images/zaune/luxus/lu_1212.png";
import img_lu_1213 from "../../images/zaune/luxus/lu_1213.png";
import img_lu_1229 from "../../images/zaune/luxus/lu_1229.png";
import img_lu_1230 from "../../images/zaune/luxus/lu_1230.png";
import img_lu_1231 from "../../images/zaune/luxus/lu_1231.png";

//imports modern
import img_modern_muster from "../../images/zaune/modern/modern_muster.jpg";

//import abdeckkappe
import img_pfosten_gerade from "../../images/zaune/basic/pfosten_gerade.png";
import img_pfosten_kugel from "../../images/zaune/basic/pfosten_rund.png";
import img_pfosten_ohne from "../../images/zaune/basic/pfosten_ohne.png";

//import briefkasten
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
    {typ: "Abdeckplatte - standard", img: img_pfosten_gerade,  desc: "", preis: 114, },
    {typ: "Abdeckplatte - Kugel", img: img_pfosten_kugel,  desc: "", preis: 161, }
]


//form
export const form = [
    {img_form: img_basic_muster, titel: "Ohne Bogen"},
    {img_form: img_basic_convex, titel: "Mit Bogen" }
];

//vorschau zäune
export const vorschau = [
    {img_vorschau: img_basic_vorschau}
]

//muster zäune
export const musterZaune = [
    {img_zaun: img_basic_classic, titel: "Classic", typ: "classic"},
    {img_zaun: img_luxus_muster, titel: "Luxus", typ: "luxus"},
    {img_zaun: img_modern_muster, titel: "Modern", typ: "modern"},
]

//muster classic zäune
export const muster_classic_zaune = [
    {img_zaun: img_basic_muster, titel: "Classic - 1101CL", price: 338},
    {img_zaun: img_cl_1102, titel: "Classic - 1102CL", price: 342},
    {img_zaun: img_cl_1103, titel: "Classic - 1103CL", price: 385},
    {img_zaun: img_cl_1107, titel: "Classic - 1107CL", price: 385},
    {img_zaun: img_cl_1111, titel: "Classic - 1111CL", price: 415},
    {img_zaun: img_cl_1112, titel: "Classic - 1112CL", price: 415},
    {img_zaun: img_cl_1117, titel: "Classic - 1117CL", price: 385}
]

//zaunsspitzen luxus 
export const zaunspitzen_luxus = [
    {img: "", titel: "keine"},
    {img: img_zaunspitze_41351, titel: "Zaunspitze - 41351"},
    {img: img_zaunspitze_41334, titel: "Zaunspitze - 41334"},
    {img: img_zaunspitze_41345, titel: "Zaunspitze - 41345"},
    {img: img_zaunspitze_41363, titel: "Zaunspitze - 41363"}
]
//muster luxus zäune
export const muster_luxus_zaune = [
    {img_zaun: img_lu_1201, titel: "Luxus - 1201LU", price: 405},
    {img_zaun: img_lu_1208, titel: "Luxus - 1208LU", price: 415},
    {img_zaun: img_lu_1209, titel: "Luxus - 1209LU", price: 415},
    {img_zaun: img_lu_1210, titel: "Luxus - 1210LU", price: 445},
    {img_zaun: img_lu_1211, titel: "Luxus - 1211LU", price: 468},
    {img_zaun: img_lu_1212, titel: "Luxus - 1212LU", price: 445},
    {img_zaun: img_lu_1213, titel: "Luxus - 1213LU", price: 468},
    {img_zaun: img_lu_1229, titel: "Luxus - 1229LU", price: 445},
    {img_zaun: img_lu_1230, titel: "Luxus - 1230LU", price: 468}
];
