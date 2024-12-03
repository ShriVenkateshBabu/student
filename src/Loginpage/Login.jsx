import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../login.css"

const Login = () => {
  let [isauth, setisauth] = useState(false)
  const navigate = useNavigate();
  useEffect(()=>{
    
      if(isauth){
       navigate("/students")
      }
      else{
       console.log("0")
      }
     
  },[isauth])
  function handlelogin (e)
  {
       e.preventDefault()
      setisauth(true);
  }
  return (
    <>
<form  className = "loginform" >
  <input type="text" placeholder="Enter the id" />
  <input type="password" placeholder="Enter the password" />
  <button type="submit" onClick={handlelogin}>LOGIN</button>
</form>

    </>
  )
}

export default Login