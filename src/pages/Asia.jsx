import React from "react";
import Navme from "../component/Navmenu";
import"../pagesStyle/Asia-page.css"
import Hsection from "../component/Hsection";
import Asiadesign from "../component/Asian-car-design";
import Toyota from "../images/toyota-logo.png";
import Kia from "../images/kia-logo.png";
import Mazda from "../images/mazda-logo.png";
import Mitsubishi from "../images/mitsubishi-logo.png";
import Nissan from "../images/nissan-logo.png";
import Hyndai from "../images/hyndai-logo.png";
import Footer from "../component/Footer";
function Asia(){
    return(
<>
<div className="container-fluid asia-page">
            <div className="row">
                <Navme/>
            </div>
            <div className="row pt-5">
                <Hsection title="Here is the most Asian Cars Companies famouse"  bcl="Info about us"/>
            </div>
           
        </div>
        <section className="container-fluid text-center " id="toyota">
                <div className="row  justify-content-center all">
                    <div className="col-3">
                    <Asiadesign  title="TOYOTA "  imgcar={Toyota} />
                    </div>
                   <div className="col-9">
                   <div className="container text-center mt-3 design">
                    <div className="row justify-content-center ">
                        <div className="col-9  compan-history">
                        <p>Toyota is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. It was founded by Kiichiro Toyoda and incorporated on August 28, 1937. Toyota is one of the largest automobile manufacturers in the world, producing about 10 million vehicles per year.</p>
                        <p> Still, in late 2022, the company signed an £11.3m government deal with the UK's Department for Business, Energy and Industrial Strategy to help it develop its Hilux FC model, a new range of hydrogen-powered pickup trucks.</p>
                        </div>
                        
                    </div>
                    <div className="row  justify-content-center pb-5">
                    <div className="col-4  text-center compan-info">
                           <h2>Let's move on & see Toyota Cars !</h2>
                           <button className="btn btn-danger">Toyota Cars</button>
                        </div>
                    </div>
                    
                   </div>
                   </div>
                </div>
            </section>
            <section className="container-fluid text-center " id="kia">
                <div className="row  justify-content-center all">
                    <div className="col-3">
                    <Asiadesign  title="KIA "  imgcar={Kia} />
                    </div>
                   <div className="col-9">
                   <div className="container text-center mt-3 design">
                    <div className="row justify-content-center ">
                        <div className="col-9  compan-history">
                        <p>Kia Corporation was founded in May 1944 and is Korea’s oldest manufacturer of motor vehicles. From humble origins making bicycles and motorcycles, Kia has grown – as part of the dynamic, global Hyundai-Kia Automotive Group – to become the world’s fifth largest vehicle manufacturer.</p>
                        <p> Today, Kia produces more than 1.4 million vehicles a year at 14 manufacturing and assembly operations in eight countries. These vehicles are sold and serviced through a network of more than 3,000 distributors and dealers covering 172 countries. The Corporation has more than 40,000 employees and annual revenues of more than US$17 billion.</p>
                        </div>
                        
                    </div>
                    <div className="row  justify-content-center pb-5">
                    <div className="col-4  text-center compan-info">
                           <h2>Let's move on & see KIA Cars !</h2>
                           <button className="btn btn-danger">KIA Cars</button>
                        </div>
                    </div>
                    
                   </div>
                   </div>
                </div>
            </section>
            <section className="container-fluid text-center " id="mazda">
                <div className="row  justify-content-center all">
                    <div className="col-3">
                    <Asiadesign  title="MAZDA"  imgcar={Mazda} />
                    </div>
                   <div className="col-9">
                   <div className="container text-center mt-3 design">
                    <div className="row justify-content-center ">
                        <div className="col-9  compan-history">
                        <p>Mazda, is a Japanese multinational company that produces automobiles and engines. Its headquarters are located in Fuchū, Hiroshima, Japan.</p>
                        <p>  Mazda is known for its innovative technologies, such as the Wankel engine, the SkyActiv platform, and the Kodo Design language. It also has a long history of motorsport involvement, winning the 24 Hours of Le Mans in 1991 with the rotary-powered Mazda 787B.</p>
                        </div>
                        
                    </div>
                    <div className="row  justify-content-center pb-5">
                    <div className="col-4  text-center compan-info">
                           <h2>Let's move on & see Mazda Cars !</h2>
                           <button className="btn btn-danger">Mazda Cars</button>
                        </div>
                    </div>
                    
                   </div>
                   </div>
                </div>
            </section>
            <section className="container-fluid text-center " id="mitsubishi">
                <div className="row  justify-content-center all">
                    <div className="col-3">
                    <Asiadesign  title=" MITSUBISHI"  imgcar={Mitsubishi} />
                    </div>
                   <div className="col-9">
                   <div className="container text-center mt-3 design">
                    <div className="row justify-content-center ">
                        <div className="col-9  compan-history">
                        <p>Mitsubishi Corporation (MC) is a global integrated business enterprise that develops and operates businesses together with its offices and subsidiaries worldwide, as well as with its global network of around 1,700 group companies.</p>
                        <p> Founded by Yatarō Iwasaki in 1870, the Mitsubishi Group historically descended from the Mitsubishi zaibatsu, a unified company which existed from 1870 to 1946.</p>
                        </div>
                        
                    </div>
                    <div className="row  justify-content-center pt-3">
                    <div className="col-4  text-center compan-info">
                           <h2>Let's move on & see Mitsubishi Cars !</h2>
                           <button className="btn btn-danger">Mitsubishi Cars</button>
                        </div>
                    </div>
                    
                   </div>
                   </div>
                </div>
            </section>
            <section className="container-fluid text-center " id="nissan">
                <div className="row  justify-content-center all">
                    <div className="col-3">
                    <Asiadesign  title="NISSAN "  imgcar={Nissan} />
                    </div>
                   <div className="col-9">
                   <div className="container text-center mt-3 design">
                    <div className="row justify-content-center ">
                        <div className="col-9  compan-history">
                        <p>Since the beginning, Nissan’s history is one of innovation without reservation and a willingness to do what others don’t dare to do. Nissan has an impressive track record of innovations that has greatly impacted the auto industry and the lives of drivers worldwide.</p>
                        <p> Nissan makes owning a car exciting and amazing. It knows the power of movement and the thrill of being in the driver’s seat.</p>
                        </div>
                        
                    </div>
                    <div className="row  justify-content-center pt-5 ">
                    <div className="col-4  text-center compan-info">
                           <h2>Let's move on & see Nissan Cars !</h2>
                           <button className="btn btn-danger">Nissan Cars</button>
                        </div>
                    </div>
                    
                   </div>
                   </div>
                </div>
            </section>
            <section className="container-fluid text-center " id="hyndai">
                <div className="row  justify-content-center all">
                    <div className="col-3">
                    <Asiadesign  title="HYNDAI "  imgcar={Hyndai} />
                    </div>
                   <div className="col-9">
                   <div className="container text-center mt-3 design">
                    <div className="row justify-content-center ">
                        <div className="col-9  compan-history">
                        <p>Hyundai Motor Company has served as the trailblazer of Korea’s automobile industry since rolling out its Pony, developed with its own exclusive technology.</p>
                        <p> Hyundai Motor Company has risen as a globally recognized automobile manufacturer that exports its branded vehicles to over 200 countries. </p>
                        </div>
                        
                    </div>
                    <div className="row  justify-content-center pt-4">
                    <div className="col-4  text-center compan-info">
                           <h2>Let's move on & see Hyndai Cars !</h2>
                           <button className="btn btn-danger">Hyndai Cars</button>
                        </div>
                    </div>
                    
                   </div>
                   </div>
                </div>
            </section>
            <section>
                <div className="container-fluid ">
               
            <div className="row  justify-content-center ">
            <div className="container-fluid">
      <div className="row">
        <div className="col-12 kl">
          <Footer/>
          </div>
        </div>
      </div>
                </div>
            </div>
            </section>
            

</>

    );
}
 export default Asia;