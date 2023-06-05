import React from 'react'
import Header from '../../../Header/Header.jsx'
import '../../../CSS/Login.css'
import {Link} from 'react-router-dom'
import { FaRegEyeSlash } from 'react-icons/fa';
import close from '../../../Assests/main/table/Close.svg'
import Footer from '../../../Footer/Footer.jsx';







const Login = () => {
  return (
    
    <div>

       <Header/>
     
       
        <div className="container">
        <div className="container_first">
        
          <div className="welcome"> Welcome Back!👋</div>
          <Link to={'/'}>
          <div className="close_icon">{<img src={close} alt="" />}</div> </Link>
          
        </div>
          <div className='login_act'>Login to your Account</div>
           <div className='Email'>Email Address*</div>
           <input className="input" type="text" placeholder='Enter Email' />
           <label className='Password'>Password*</label>

           <div className='password-input'>
           <input className="input" type="text" placeholder='Enter Password'/>
           <div className='icon1'>
           <FaRegEyeSlash/>
           </div>
           
           </div>
           <div className="forget_password">
            <div className='forget_password1'>Forget Password ?</div>
            <div> <input type="checkbox"/>
            <label for="vehicle2">Remember me</label></div>
           
            </div>
            <div><Link to='/website'><button className='login_btn'>Login</button></Link>
            <div className='last'>Do not have a account? <Link to='/signup'> <span className='span'>Sign Up</span></Link></div>
            </div>
            {/* <div className='last'>Do not have a account? <Link to='/signup'> <span className='span'>Sign Up</span></Link></div> */}


        </div>
        <Footer/>
    </div>
  )
}

export default Login