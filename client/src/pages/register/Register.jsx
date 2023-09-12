import React, { useState } from 'react'
import axios from 'axios';
import './register.css'
import { useNavigate } from 'react-router-dom'
export default function Register() {
  const navigate = useNavigate();
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false);
    try{
      const res = await axios.post("https://lifeofpen-blog-10jusuvar-kiddanbonggg-gmailcom.vercel.app/auth/register",{
        username,
        email,
        password
      });
      res.data && window.location.replace("https://lifeofpen-blog-10jusuvar-kiddanbonggg-gmailcom.vercel.app/login");
    }catch(err){
       setError(true)
    }
  }
  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className='registerInput' placeholder='Enter your username...' 
        onChange={e=>setUsername(e.target.value)}
        />
        <label>Email</label>
        <input type="text" className='registerInput' placeholder='Enter your email...' 
        onChange={e=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input type="password" className='registerInput' placeholder='Enter your password...'
        onChange={e=>setPassword(e.target.value)} />
        <button className='registerButton' type='submit'>Register</button>
      </form>
        <button className='registerLoginButton' onClick={()=>{
            navigate('/login')
        }}>Login</button>
        {error&&<span style={{color: "red", marginTop:"10px"}}>Something went wrong</span>}
    </div>
  )
}
