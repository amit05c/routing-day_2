import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import {AuthContext} from "../context/AuthContext"
import Login from '../pages/Login'

const Navbar = () => {
  const {isAuth,logout,login} =useContext(AuthContext)
  const navigate= useNavigate()
  const handleClick = ()=>{
    console.log(isAuth)
    if(isAuth){
      logout()
      // navigate("/")
    }else{
      navigate("/login")
      

    }
  }
  return (
    <div style={{display:"flex", gap: "20px",justifyContent:"center", margin:"auto"}}>
     <Link to={"/"}>Home</Link>
     <Link to={"/feeds"}>Feeds</Link>
     <button onClick={handleClick} >{isAuth? "Logout" : "Login"}</button>

    </div>
  )
}

export default Navbar