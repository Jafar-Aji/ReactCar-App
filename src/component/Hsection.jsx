import React from "react";

import { Link } from "react-router-dom";
function Hsection(props){
    return(
        <>
        <section id="head-sece">
            <div className="container text-center pt-5">
                <div className="row ">
                    <div className="col-6 align-self-center text-se ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis labore saepe accusamus sapiente ut commodi nostrum sint? Corrupti vitae, esse dolorum odio, amet laborum beatae officiis mollitia similique est eum.</p>
                        <h2>Our Mission</h2>
                        <button className="btn btn-warning let-go"><Link to="/">{props.bcl}  </Link>  </button>
                    </div>
                    <div className="col-6 title-home">
                        <div  className="for-title-home">
                        <h1>{props.title}</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default Hsection;