import React from "react";
import { Link } from "react-router-dom";
import logo from"../images/logo.png";
import "../pagesStyle/Footer.css";

function Footer(){
    return(
        <>
                
                    <section className="  final">
                        <div className="container-fluid text-center pt-2 final-2">

                        
                        <div className="row final-ro   justify-content-center">
                            <div className="col-4  final-co   text-center">
                            <Link  id="footer-logo" to="/"><img src={logo}   alt=""  /></Link>
                            </div>
                            <div className="col-4 align-self-center text-center footer-link">
                                    <ul>
                                       
                                        <li>Designed and built using HTML,Css,Bootstrap,React Js </li>
                                        <li>Copy right @ 26/5/2023 </li>
                                    </ul>
                            </div>
                            <div className="col-4 align-self-center  footer-link text-center">
                                        <ul>
                                            <li>Join Us and <Link to={'/form'}> Sign Up   </Link> </li>
                                            <li>Use the Bootstrap ! just<Link to={"https://getbootstrap.com/"}>  click  </Link></li>
                                            <li>Use the React Js ! <Link to={"https://legacy.reactjs.org/"}> Go from here </Link></li>
                                        </ul>
                            </div>
                        </div>
                        </div>
                    </section>
               
        </>
    );
}
export default Footer;