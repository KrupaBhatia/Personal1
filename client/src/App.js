
import { Route,Routes,} from "react-router-dom";
import './App.css';
import './Components/Css/Home.css'
import './Components/Css/ApplyForm.css'
import './Components/Css/Nav.css'
import './Components/Css/Status.css'
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import ApplyForm from './Components/ApplyForm';

import ContactUs from "./Components/ContactUs";
import Status from "./Components/Status";

function App() {
  return (
   <div className='App'>
   
   <NavBar/>
   <Routes>
    <Route path="/" exact element = { <Home/> } />
    <Route path="/status" exact element = { <Status/> } />
    <Route path="/apply" exact element = { <ApplyForm/> } />
    <Route path="/contactus" exact element = { <ContactUs/> } />
   </Routes>
   </div>
  );
}

export default App;
