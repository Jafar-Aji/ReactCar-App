import React from "react";
function  Compancar(props){
    return(
            <>
                 <div className="container">
                        <div className="row justify-content-center all2">
                        <div className="col-2   company-logo">
                    
                        <div className="text-center">
                     <img src={props.imgcar}  className="rounded  img-fluid" alt="..."/>
                    </div>
                    </div>
                    <div className="col-5 text-center compan-head">
                        <h2>{props.title} </h2>
                    </div>
                        </div>
                   
                    
                    </div>
           
            </>
    );
}
export default Compancar;