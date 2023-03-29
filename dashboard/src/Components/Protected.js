import React ,{ useEffect } from "react";
import { useNavigate } from "react-router-dom";


const useAuth = () => { 
  const user = {loggedIn : false} ;
  
}

const Protected = (props) => {
   let Component = props.Component
     const navigate = useNavigate()
    useEffect(() => {
      if (!localStorage.getItem('token')){
        navigate('/')
      }
   
    },[])

  return (
<div>
    <Component />
</div>
  );
};
export default Protected;




