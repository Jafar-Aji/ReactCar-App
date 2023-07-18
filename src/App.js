import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Usa from "./pages/Usa";
import Asia from "./pages/Asia";
import Euorpe from "./pages/Euorpe";
import Compancar from "./component/Compancar";
import Asiadesign from "./component/Asian-car-design";
import Euorpedesign from "./component/Euorpe-design";
import Formp from "./pages/Form-page";
function App() {
  return (
      <>
      <Routes>
        <Route    path="/"  element={<Home/>}/>
        <Route    path="usa"  element={<Usa/>}/>
        <Route    path="asia"  element={<Asia/>}/>
        <Route    path="europe"  element={<Euorpe/>}/>
        <Route     path="dodge"   element={<Compancar/>} />
        <Route     path="chever"   element={<Compancar/>} />
        <Route     path="ford"   element={<Compancar/>} />
        <Route     path="gmcsec"   element={<Compancar/>} />
        <Route     path="cadilac"   element={<Compancar/>} />
        <Route     path="jeep"   element={<Compancar/>} />
        <Route    path="toyota" element={<Asiadesign/>} />
        <Route     path="kia"   element={<Asiadesign/>}  />
        <Route  path="mazda" element={<Asiadesign/>} />
        <Route   path="mitsubishi" element={<Asiadesign/>} />
        <Route   path="nissan" element={<Asiadesign/>} />
        <Route    path="hyndai" element={<Asiadesign/>}  />
        <Route    path="bmw"  element={<Euorpedesign/>}  />
        <Route   path="form"  element={<Formp/>} />
      </Routes>

        
     
      </>
   
  );
}

export default App;
