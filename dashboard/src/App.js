
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Space } from "antd";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import Login from "./Components/AdminLogin";

function App() {
  return (
    <div className="App">
    
      <AppHeader />
      <div className="SideMenuAndPageContent">
      <Route path="/" element={<Login/>}></Route>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );
}
export default App;
