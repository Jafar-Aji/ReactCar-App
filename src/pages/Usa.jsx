import React from "react";
import Navme from "../component/Navmenu";
import "../pagesStyle/Home.css";
import "../pagesStyle/Usa-page.css";
import Hsection from "../component/Hsection";
import Cadilac from "../images/cadilac.png";
import Compancar from "../component/Compancar";
import Chevrolet from "../images/chevrolet.png";
import Ford from "../images/ford.png";
import Gmc from "../images/gmc.png";
import Jeep from "../images/jeep.png";
import Dodgeimg from "../images/dodge.png";
import Footer from "../component/Footer";

function Usa(){
    return(

    <>
        <div className="container-fluid us-page">
            <div className="row">
                <Navme/>
            </div>
            <div className="row pt-5">
                <Hsection title="Here is the most USA Cars Companies famouse"  bcl="Info about us"/>
            </div>
           
        </div>
       
            
            <section className="container-fluid text-center " id="dodge">
                <div className="row  justify-content-center all">
                   <Compancar  title="Dodge Challenger"  imgcar={Dodgeimg} />
                   <div className="container text-center mt-3">
                    <div className="row justify-content-center ">
                        <div className="col-7  compan-history">
                        <p>Dodge is an American brand of automobiles and a division of Stellantis North America, based in Auburn Hills, Michigan. Dodge vehicles have historically included performance cars, and for much of its existence Dodge was Chrysler's mid-priced brand above Plymouth.</p>
                            <p>In 2011, Dodge and its sub-brands, Dodge Ram and Dodge Viper, were separated. Dodge announced that the Viper was to be an SRT product, and Ram a standalone marque. In 2014, SRT was merged back into Dodge. Later that year, the Chrysler Group was renamed FCA US LLC, coinciding with the merger of Fiat S.p.A. and the Chrysler Group into the corporate structure of Fiat Chrysler Automobiles. Subsequently, another merger occurred on January 16, 2021, between FCA and the PSA Group (Stellantis), making the Dutch-domiciled automaker the second largest in Europe, after Volkswagen</p>
                        </div>
                        <div className="col-4  text-center compan-info">
                           <h2>Let's move on & see Dodge's Car !</h2>
                           <button className="btn btn-warning">Dodge Cars</button>
                        </div>
                    </div>
                   </div>
                </div>
            </section>
            <section className="container-fluid text-center " id="chever">
                <div className="row  justify-content-center all">
                   <Compancar  title="Chevrolet "  imgcar={Chevrolet} />
                   <div className="container text-center mt-3">
                    <div className="row justify-content-center ">
                        <div className="col-7  compan-history">
                        <p>Chevrolet Motor Division of General Motors Company) is an American automobile division of the American manufacturer General Motors (GM). Louis Chevrolet (1878–1941), Arthur Chevrolet (1884–1946) and ousted General Motors founder William C. Durant (1861–1947) started the company on November 3, 1911[3] as the Chevrolet Motor Car Company. Durant used the Chevrolet Motor Car Company to acquire a controlling stake in General Motors with a reverse merger occurring on May 2, 1918, and propelled himself back to the GM presidency.</p>
                        <p>In North America, Chevrolet produces and sells a wide range of vehicles, from subcompact automobiles to medium-duty commercial trucks. Due to the prominence and name recognition of Chevrolet as one of General Motors' global marques, 'Chevrolet', 'Chevy' or 'Chev' is used at times as a synonym for General Motors or its products, one example being the GM LS1 engine, commonly known by the name or a variant thereof of its progenitor, the Chevrolet small-block engine.</p>
                        </div>
                        <div className="col-4  text-center compan-info">
                           <h2>Let's move on & see Chevrolet's Car !</h2>
                           <button className="btn btn-warning">Chevrolet Cars</button>
                        </div>
                    </div>
                   </div>
                </div>
            </section>
            <section className="container-fluid text-center " id="ford">
                <div className="row  justify-content-center all">
                   <Compancar  title="Ford "  imgcar={Ford} />
                   <div className="container text-center mt-3">
                    <div className="row justify-content-center ">
                        <div className="col-7  compan-history">
                        <p>Ford Motor Company (commonly known as Ford) is an American multinational automobile manufacturer headquartered in Dearborn, Michigan, United States. It was founded by Henry Ford and incorporated on June 16, 1903. The company sells automobiles and commercial vehicles under the Ford brand, and luxury cars under its Lincoln brand.</p>
                        <p>Ford is the second-largest U.S.-based automaker (behind General Motors) and the fifth largest in the world (behind Toyota, Volkswagen, Hyundai and General Motors) based on 2015 vehicle production. At the end of 2010, Ford was the fifth-largest automaker in Europe.[11] The company went public in 1956 but the Ford family, through special Class B shares, still retain 40 percent of the voting rights.</p>
                        </div>
                        <div className="col-4  text-center compan-info">
                           <h2>Let's move on & see Fords's Car !</h2>
                           <button className="btn btn-warning">Ford Cars</button>
                        </div>
                    </div>
                   </div>
                   
                </div>
            </section>
            <section className="container-fluid text-center " id="gmcsec">
                <div className="row  justify-content-center all">
                   <Compancar  title="GMC "  imgcar={Gmc} />
                   <div className="container text-center mt-3">
                    <div className="row justify-content-center ">
                        <div className="col-7  compan-history">
                        <p>GMC (formerly the General Motors Truck Company (1911–1943), or the GMC Truck & Coach Division (1943–1998)) is a division of American automotive manufacturer General Motors (GM) for trucks and utility vehicles. GMC currently makes SUVs, pickup trucks, vans, and light-duty trucks. In the past, GMC also produced fire trucks, ambulances, heavy-duty trucks, military vehicles, motorhomes, transit buses, and medium duty trucks.</p>
                        <p>While many of their vehicles are mechanically similar, GMC is positioned as a premium offering to the mainstream Chevrolet brand, and includes the luxury trim Denali. In North America, GMC vehicles are almost always sold alongside Buick (another premium brand) vehicles at multi-brand dealerships.</p>
                        </div>
                        <div className="col-4  text-center compan-info">
                           <h2>Let's move on & see GMC Cars !</h2>
                           <button className="btn btn-warning">GMC Cars</button>
                        </div>
                    </div>
                   </div>
                </div>
            </section>
            <section className="container-fluid text-center " id="jeep">
                <div className="row  justify-content-center all">
                   <Compancar  title="Jeep "  imgcar={Jeep} />
                   <div className="container text-center mt-3">
                    <div className="row justify-content-center ">
                        <div className="col-7  compan-history">
                        <p>Jeep is an American automobile marque, now owned by multi-national corporation Stellantis.Jeep has been part of Chrysler since 1987, when Chrysler acquired the Jeep brand, along with remaining assets, from its previous owner American Motors Corporation (AMC).</p>
                        <p>Jeep's current product range consists solely of sport utility vehicles—both crossovers and fully off-road worthy SUVs and models, including one pickup truck. Previously, Jeep's range included other pick-ups, as well as small vans, and a few roadsters.</p>
                        </div>
                        <div className="col-4  text-center compan-info">
                           <h2>Let's move on & see Jeep Cars !</h2>
                           <button className="btn btn-warning">Jeep Cars</button>
                        </div>
                    </div>
                   </div>
                </div>
            </section>
            <section className="container-fluid text-center " id="cadilac">
                <div className="row  justify-content-center all">
                   <Compancar  title="Cadilac "  imgcar={Cadilac} />
                   <div className="container text-center mt-3">
                    <div className="row justify-content-center ">
                        <div className="col-7  compan-history">
                        <p>The Cadillac Motor Car Division is a division of the American automobile manufacturer General Motors (GM) that designs and builds luxury vehicles. Its major markets are the United States, Canada, and China. Cadillac models are distributed in 34 additional markets worldwide. Cadillac automobiles are at the top of the luxury field within the United States. In 2019, Cadillac sold 390,458 vehicles worldwide, a record for the brand.</p>
                        <p>Cadillac had the first U.S. car to win the Royal Automobile Club of the United Kingdom's Dewar Trophy by successfully demonstrating the interchangeability of its component parts during a reliability test in 1908; this spawned the firm's slogan "Standard of the World". It won the trophy again in 1912 for incorporating electric starting and lighting in a production automobile.</p>
                        </div>
                        <div className="col-4  text-center compan-info">
                           <h2>Let's move on & see Cadillac Cars !</h2>
                           <button className="btn btn-warning">Cadillac Cars</button>
                        </div>
                    </div>
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
export default Usa;