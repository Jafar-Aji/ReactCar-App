import React from "react";
import Navme from "../component/Navmenu";
import "../pagesStyle/Home.css";
import Hsection from "../component/Hsection";
import Footer from "../component/Footer";
function Home(){
    return(
       <>
      
      <div className="container-fluid first-home text-center pt-5">
      <div className="row justify-content-center pt-3" >
            <div className="col-12 kl">
            <Navme/>
            </div>
        
        </div>
        <div className="row ">
          <div className="col-12 kl">
          <Hsection title="Find your dream car!" bcl="About Us"/>
          </div>
         

        </div>
        
      </div>
      <div className="container-fluid">
      <div className="row">
        <div className="col-12 kl">
          <Footer/>
          </div>
        </div>
      </div>
      </>
    );
}
export default Home;