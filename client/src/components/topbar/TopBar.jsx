import React, { useContext } from 'react'
import './topbar.css'
import { Link, Outlet } from 'react-router-dom'
import { Context } from '../../context/Context'

export default function TopBar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const handleLogout =()=>{
        dispatch({type:"LOGOUT"})
  }
  return (
    <>
    <div>
    <div className='top'>
      <div className='topLeft'>
      <i className="topIcon fab fa-facebook-square"></i>
      <i className="topIcon fab fa-instagram-square"></i>
      <i className="topIcon fab fa-twitter-square"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
    </div>
      <div className='topCenter'>
        <ul className="topList">
            <Link className='topListItem' to='/'>Home</Link>
            <Link className='topListItem' to='/about'>About</Link>
            <Link className='topListItem' to='/about'>Contact</Link>
            <Link className='topListItem' to='/write'>Write</Link>
            <Link className='topListItem' onClick={handleLogout}>{user && 'Logout'}</Link>
        </ul>
      </div>
      <div className='topRight'>
        
            {user?(
              <Link to="/settings">
              <img className='topImg'
              src={PF+user.profilePic} alt="" />
              </Link>
            ):(
              <ul className='topList'>
              <li><Link className='topListItem' to='/login'>LOGIN</Link></li>
              <li><Link className='topListItem' to='/register'>REGISTER</Link></li>
              </ul>
            )}
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    <Outlet/>
    </div>
    </>
  )
}
