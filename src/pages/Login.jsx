import React, { useState,useEffect,useContext } from 'react'
 import {AuthContext} from "../context/AuthContext"
//  import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [loginCreds,setlogin]=useState({})
  const {login} = useContext(AuthContext)
 
  const handleChange = (e)=>{
              // console.log(e.target.value)
              const {name,value} = e.target;
              console.log(name)
            setlogin({
              ...loginCreds,
                [name]:value
            })
            console.log(loginCreds)
  }

  const handleSubmit= (e)=>{
    // TODO
    e.preventDefault()
    login()
    
    
    // console.log(form)

}
  
  return (
    <div>Login
      <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",maxWidth:"20vw",gap:"1vw",margin:"auto"}}>

      <input type="email" name='email' placeholder='email' onChange={handleChange} />
      <input type="password" name='pass' placeholder='password' onChange={handleChange}/>
      <button type='submit' >Login</button>
      </form>
    </div>
  )
}

export default Login