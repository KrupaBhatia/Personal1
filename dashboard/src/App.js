
import { Route,Routes,} from "react-router-dom";
import './App.css';
import './Components/Css/AdminLogin.css'

import AdminLogin from './Components/AdminLogin'
import NavBar from "./Components/NavBar";


function App() {
  return (
   <div className='App'>
   
   <NavBar/>
   <Routes>
    <Route path="/" exact element = { <AdminLogin/> } />

   </Routes> 
   </div>
  );
}

export default App;
