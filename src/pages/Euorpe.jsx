import React from "react";
import Navme from "../component/Navmenu";
import"../pagesStyle/Asia-page.css";
import Hsection from "../component/Hsection";
import "../pagesStyle/Euorpe-page.css";
import Bmw from "../images/bmw-logo.png";
import Benz from "../images/benz-logo.png";
import Audi from "../images/audi-logo.png";
import Volkswagen from "../images/volkswagen_logo.png";
import Range from "../images/rang-logo.png";
import Jaguar from "../images/Jaguar-Logo.png";
import Euorpedesign from "../component/Euorpe-design";
import Footer from "../component/Footer";
function Euorpe(){
    return(

        <>
        <div className="container-fluid europe-page">
            <div className="row">
                <Navme/>
            </div>
            <div className="row pt-5">
                <Hsection title="Here is the most Euorpe Cars Companies famouse"  bcl="Info about us"/>
            </div>
           
        </div>
        <section className="container-fluid text-center " id="bmw">
                <div className="row  justify-content-center all">
                    
                   <div className="col-8">
                   <div className="container text-center mt-3 design">
                    <div className="row justify-content-center ">
                        <div className="col-9  compan-history-e">
                        <p>BMW is headquartered in Munich and produces motor vehicles in Germany, Brazil, China, India, Mexico, the Netherlands, South Africa, the United Kingdom, and the United States. The Quandt family is a long-term shareholder of the company, following investments by the brothers Herbert and Harald Quandt in 1959 that saved BMW from bankruptcy, with the remaining shares owned by the public.</p>
                        <p>Automobiles are marketed under the brands BMW, Mini and Rolls-Royce, and motorcycles are marketed under the brand BMW Motorrad. </p>
                        </div>
                        
                    </div>
                    <div className="row  justify-content-center pt-5">
                    <div className="col-5  text-center compan-info">
                           <h2>Let's move on & see BMW Cars !</h2>
                           <button className="btn btn-light">BMW Cars</button>
                        </div>
                    </div>
                    
                   </div>
                   </div>
                   <div className="col-3">
                    <Euorpedesign  title="BMW  "  imgcar={Bmw} />
                    </div>
                </div>
            </section>
            <section className="container-fluid text-center " id="mercedes">
                <div className="row  justify-content-center all">
                    
                   <div className="col-8">
                   <div className="container text-center mt-3 design">
                    <div className="row justify-content-center ">
                        <div className="col-9  compan-history-e">
                        <p>Mercedes-Benz was founded in 1926 by Karl Benz, Gottlieb Daimler, Wilhelm Maybach and Emil Jellinek, whose daughter Mercedes is our original namesake. With offices in 93 locations worldwide and a corporate headquarters in Stuttgart, Germany, our global presence continues to grow.</p>
                        <p>Mercedes-Benz AG (a Mercedes-Benz Group subsidiary established in 2019) is headquartered in Stuttgart, Baden-Württemberg, Germany. Mercedes-Benz AG produces consumer luxury vehicles and commercial vehicles badged as Mercedes-Benz.</p>
                        </div>
                        
                    </div>
                    <div className="row  justify-content-center pt-5">
                    <div className="col-5  text-center compan-info">
                           <h2>Let's move on & see Mercedes Cars !</h2>
                           <button className="btn btn-light">Mercedes Cars</button>
                        </div>
                    </div>
                    
                   </div>
                   </div>
                   <div className="col-3">
                    <Euorpedesign  title="MERCEDES BENZ  "  imgcar={Benz} />
                    </div>
                </div>
            </section>
            <section className="container-fluid text-center " id="audi">
                <div className="row  justify-content-center all">
                    
                   <div className="col-8">
                   <div className="container text-center mt-3 design">
                    <div className="row justify-content-center ">
                        <div className="col-9  compan-history-e">
                        <p>AUDI AG is a German company that produces cars under the Audi brand. It is part of the Volkswagen Group. The name Audi is based on a Latin translation of the surname of the founder August Horch, itself the German word for “listen!" Audi is headquartered in Ingolstadt, Germany.</p>
                        <p>The origins of the company are complex, going back to the early 20th century and the initial enterprises (Horch and the Audiwerke) founded by engineer August Horch (1868–1951); and two other manufacturers (DKW and Wanderer), leading to the foundation of Auto Union in 1932.</p>
                        </div>
                        
                    </div>
                    <div className="row  justify-content-center pt-5">
                    <div className="col-5  text-center compan-info">
                           <h2>Let's move on & see Audi Cars !</h2>
                           <button className="btn btn-light">Audi Cars</button>
                        </div>
                    </div>
                    
                   </div>
                   </div>
                   <div className="col-3">
                    <Euorpedesign  title="AUDI "  imgcar={Audi} />
                    </div>
                </div>
            </section>
            <section className="container-fluid text-center " id="volkswagen">
                <div className="row  justify-content-center all">
                    
                   <div className="col-8">
                   <div className="container text-center mt-3 design">
                    <div className="row justify-content-center ">
                        <div className="col-9  compan-history-e">
                        <p>The Volkswagen brand is one of the largest car manufacturers in the world. For more than 70 years, we have been making innovative technologies, the highest quality and attractive designs accessible to many people – with the likes of bestsellers such as the Beetle, the Golf and the all-electric ID.</p>
                        <p>In July 2022 Volkswagen noted the development of the first of their own Gigafactories. The site, based in Salzgitter in Germany, has been termed Mission SalzGiga. The new business unit is focused on all of Volkswagen's battery activities "from raw materials and the cell right through to recycling", and is part of a €20 billion investment.</p>
                        </div>
                        
                    </div>
                    <div className="row  justify-content-center pt-5">
                    <div className="col-5  text-center compan-info">
                           <h2>Let's move on & see Volkswagen Cars !</h2>
                           <button className="btn btn-light">Volkswagen Cars</button>
                        </div>
                    </div>
                    
                   </div>
                   </div>
                   <div className="col-3">
                    <Euorpedesign  title="Volkswagen  "  imgcar={Volkswagen} />
                    </div>
                </div>
            </section>
            <section className="container-fluid text-center " id="range">
                <div className="row  justify-content-center all">
                    
                   <div className="col-8">
                   <div className="container text-center mt-3 design">
                    <div className="row justify-content-center ">
                        <div className="col-9  compan-history-e">
                        <p>Jaguar is the luxury vehicle brand of Jaguar Land Rover, a British multinational car manufacturer with its headquarters in Whitley, Coventry, England. Jaguar Cars was the company that was responsible for the production of Jaguar cars until its operations were fully merged with those of Land Rover to form Jaguar Land Rover on 1 January 2013.</p>
                        <p>Jaguar's business was founded as the Swallow Sidecar Company in 1922, originally making motorcycle sidecars before developing bodies for passenger cars. </p>
                        </div>
                        
                    </div>
                    <div className="row  justify-content-center pt-5">
                    <div className="col-5  text-center compan-info">
                           <h2>Let's move on & see Range Rover Cars !</h2>
                           <button className="btn btn-light">Range Rover Cars</button>
                        </div>
                    </div>
                    
                   </div>
                   </div>
                   <div className="col-3">
                    <Euorpedesign  title="RANGE ROVER  "  imgcar={Range} />
                    </div>
                </div>
            </section>
            <section className="container-fluid text-center " id="jaguar">
                <div className="row  justify-content-center all">
                    
                   <div className="col-8">
                   <div className="container text-center mt-3 design">
                    <div className="row justify-content-center ">
                        <div className="col-9  compan-history-e">
                        <p>The Range Rover is a 4x4 full-size luxury SUV produced by Land Rover, a marque and sub-brand of Jaguar Land Rover. The Range Rover line was launched in 1970 by British Leyland and is now in its fifth generation.</p>
                        <p>Additional models have been launched under the Range Rover name, including the Range Rover Sport, Range Rover Evoque, and Range Rover Velar.</p>
                        </div>
                        
                    </div>
                    <div className="row  justify-content-center pt-5">
                    <div className="col-5  text-center compan-info">
                           <h2>Let's move on & see Jaguar Cars !</h2>
                           <button className="btn btn-light">Jaguar Cars</button>
                        </div>
                    </div>
                    
                   </div>
                   </div>
                   <div className="col-3">
                    <Euorpedesign  title="JAGUAR  "  imgcar={Jaguar} />
                    </div>
                </div>
            </section>
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
export default Euorpe;