import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../login.css"

const Login = () => {
  let [isauth, setisauth] = useState(false)
  const navigate = useNavigate();
  function handlelogin (){
   setisauth(true);
   if(isauth){
    navigate("/students")
   }
   else{
    return null
   }
  }
  return (
    <>
<form  className = "loginform" onSubmit={(e) => e.preventDefault()}>
  <input type="text" placeholder="Enter the id" />
  <input type="password" placeholder="Enter the password" />
  <button type="button" onClick={()=>handlelogin()}>LOGIN</button>
</form>

    </>
  )
}

export default Login