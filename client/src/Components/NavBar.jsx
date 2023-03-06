import React from "react";
import { NavLink } from 'react-router-dom'


const Nav = () => {

    return (

        <div className="nav-bar-main-div">
        
                
            <ul>
            
                {/* <li> <NavLink className="GoogleTranslate" to="/GoogleTranslate" > GoogleTranslate </NavLink> </li> */}
                 <img id="img-logo" src="https://cdn.pixabay.com/photo/2013/07/13/09/54/india-156270__340.png" alt="logo"/> 
                <li> <NavLink className="apply-visa" to='/apply'> APPLY FOR VISA </NavLink> </li>
                <li> <NavLink className="status" to='/status'> VISA STATUS </NavLink> </li>
                <li> <NavLink className="nav-bar" to='/'> HOME </NavLink> </li>
                <li> <NavLink className="nav-bar" to='/contactUs'> CONTACT US </NavLink> </li>

            </ul>
        </div>
    )
}
export default Nav