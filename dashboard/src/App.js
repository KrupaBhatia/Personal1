import "./App.css";
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin";
import Customers from "./Pages/Customers"

import Inventory from "./Pages/Inventory";
import Orders from "./Pages/Orders";

import Protected from "./Components/Protected"


function App() {
 
  return (
    
  
    <div className="App">
    
      <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route  path="/inventory" element={<Protected Component={Inventory} />} />
      <Route  path="/orders" element={<Protected Component={Orders} />} />
      <Route  path="/customers" element={<Protected Component={Customers} />} />
      </Routes> 
   </div>
  );
}
export default App;
