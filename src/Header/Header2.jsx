import React from 'react'
import Logo from '../Assests/Logo.svg'
import { Link } from 'react-router-dom'
import logout from '../Assests/main/Logout.svg'
import '../CSS/Header2.css'

const Header2 = () => {
  return (
    <div>
        <div className="header">
        
        <div className="left_section">
           <div className="check">
           <Link to='/'>
            <img src={Logo} alt="" />
            </Link>
           </div> 
        </div>
        <div className="right_section">
       
            <Link to="/login">
            <div className='login'>
                Logout
                <img src={logout}alt="" />
            </div>
            </Link>
            
        </div>
    </div>
    </div>
  )
}

export default Header2