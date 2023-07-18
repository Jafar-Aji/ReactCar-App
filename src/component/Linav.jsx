import React from "react";
function Linav(props){
    return(
        <>
        <div className="row">
            <div className="col linav-title">{props.title}</div>
            <div className="col"><img src={props.imge} class="rounded" alt="..."/></div>
        </div> 
        </>
    );
}
  export default Linav;