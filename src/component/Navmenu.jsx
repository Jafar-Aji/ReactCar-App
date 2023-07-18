import React from "react";
import {Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "../pagesStyle/Nav.css";
import logo from '../images/logo.png';
import Ford from "../images/ford.png";
import Gmc from "../images/gmc.png";
import Jeep from "../images/jeep.png";
import Dodgeimg from "../images/dodge.png";
import Cadilac from "../images/cadilac.png";
import Chevrolet from "../images/chevrolet.png";
import Toyota from "../images/toyota-logo.png";
import Kia from "../images/kia-logo.png";
import Mazda from "../images/mazda-logo.png";
import Mitsubishi from "../images/mitsubishi-logo.png";
import Nissan from "../images/nissan-logo.png";
import Hyndai from "../images/hyndai-logo.png";
import Bmw from "../images/bmw-logo.png";
import Benz from "../images/benz-logo.png";
import Audi from "../images/audi-logo.png";
import Volkswagen from "../images/volkswagen_logo.png";
import Range from "../images/rang-logo.png";
import Jaguar from "../images/Jaguar-Logo.png";
import Linav from "./Linav";

function Navme  (){
   return(
      <>
        <nav className="navbar  navbar-expand-lg "    id="frist-nav">
  <div className="container-fluid   ">

      
  <Link className="navbar-brand" to="/"><img src={logo} alt=""  /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className=" navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
         
          <Link className="nav-link  btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" to="/usa">USA</Link> 
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><Link className="nav-link    dropdown-item" to="/usa">All Companies in USA</Link></li>
            <li><HashLink  className="nav-link   dropdown-item" to="/usa#dodge"><Linav title="Dodge"  imge={Dodgeimg}/> </HashLink></li>
            <li><HashLink  className="nav-link   dropdown-item" to="/usa#ford"><Linav title="Ford" imge={Ford} /></HashLink></li>
            <li><HashLink  className="nav-link   dropdown-item" to="/usa#chever"><Linav title="Chevrolet" imge={Chevrolet} /></HashLink></li>  
            <li><HashLink  className="nav-link   dropdown-item" to="/usa#gmcsec"><Linav title="GMC" imge={Gmc} /></HashLink></li> 
            <li><HashLink  className="nav-link   dropdown-item" to="/usa#cadilac"><Linav title="Cadillac" imge={Cadilac} /></HashLink></li>
            <li><HashLink  className="nav-link   dropdown-item" to="/usa#jeep"><Linav title="Jeep" imge={Jeep}/></HashLink></li>
            </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" to="/asia">ASIA</Link>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><Link className="nav-link  dropdown-item" to="/asia">All Companies in Asia</Link></li>
            <li><HashLink  className="nav-link   dropdown-item" to="/asia#toyota"><Linav title="Toyota"  imge={Toyota}/> </HashLink></li>
            <li><HashLink  className="nav-link   dropdown-item" to="/asia#kia"><Linav title="KIA"  imge={Kia}/> </HashLink></li>
            <li><HashLink  className="nav-link   dropdown-item" to="/asia#mazda"><Linav title="Mazda"  imge={Mazda}/> </HashLink></li>  
            <li><HashLink  className="nav-link   dropdown-item" to="/asia#mitsubishi"><Linav title="Mitsubishi"  imge={Mitsubishi}/> </HashLink></li> 
            <li><HashLink  className="nav-link   dropdown-item" to="/asia#hyndai"><Linav title="Hyndai"  imge={Hyndai}/> </HashLink></li>
            <li><HashLink  className="nav-link   dropdown-item" to="/asia#nissan"><Linav title="Nissan"  imge={Nissan}/> </HashLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown ">
          <Link className="nav-link btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" to="/europe">Europe</Link>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><Link className="nav-link  dropdown-item" to="/europe">All Companies in Europe</Link></li>
            <li><HashLink  className="nav-link   dropdown-item" to="/europe#mercedes"> <Linav title="Mercedes"  imge={Benz}/></HashLink></li>
            <li><HashLink  className="nav-link   dropdown-item" to="/europe#bmw"><Linav title="BMW"  imge={Bmw}/></HashLink></li>
            <li><HashLink  className="nav-link   dropdown-item" to="/europe#audi"><Linav title="AUDI"  imge={Audi}/></HashLink></li>  
            <li><HashLink  className="nav-link   dropdown-item" to="/europe#rang"><Linav title="Range Rover"  imge={Range}/></HashLink></li> 
            <li><HashLink  className="nav-link   dropdown-item" to="/europe#jaguar"><Linav title="Jaguar"  imge={Jaguar}/></HashLink></li>
            <li><HashLink  className="nav-link   dropdown-item" to="/europe#volkswagen"><Linav title="Volkswagen"  imge={Volkswagen}/></HashLink></li>
          </ul>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
 
      </>
   );
   
}


export default Navme;