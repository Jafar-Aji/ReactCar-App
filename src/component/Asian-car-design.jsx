import React from "react";
function Asiadesign(props){
    return(
        <>
                 <div className="container pt-5">
                        <div className="row justify-content-center  asian-sign">
                        <div className="col-12   asian-company-logo">
                    
                        <div className="text-center">
                     <img src={props.imgcar}  className="rounded    img-fluid" alt="..."/>
                    </div>
                    </div>
                    <div className="col-12 pt-5 text-center asian-compan-head">
                        <h2>{props.title} </h2>
                    </div>
                        </div>
                   
                    
                    </div>
        
        
        </>
    );
}
export default Asiadesign;