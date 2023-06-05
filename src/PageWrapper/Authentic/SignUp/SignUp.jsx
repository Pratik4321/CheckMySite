import React from 'react'
import Header from '../../../Header/Header.jsx'
import '../../../CSS/SignUp.css'
import { Link } from 'react-router-dom'
import close from '../../../Assests/main/table/Close.svg'
import Footer from '../../../Footer/Footer.jsx'


const SignUp = () => {
  return (
    <div>
         <Header/>
         <div className="container">
        <div className="container_first">
        
          <div className="welcome"> Welcome Back!👋</div>
          <Link to={'/'}>
          <div className="close_icon">{<img src={close} alt="" />}</div> 
          </Link>
          
        </div>
          <div className='login_act'>Login to your Account</div>
           <div className='Email'>Email Address*</div>
           <input className="input" type="text" placeholder='Enter Email' />

           <div className='Email'>Contact*</div>
           <input className="input" type="text" placeholder='Enter Number' />

           <label className='Password'>Password*</label>
           <div>
           <input className="input" type="text" placeholder='Enter Password'/>
           <div className='icon'>
         
           </div>
           </div>
           <label className='Password'>Confirm Password*</label>
           <div>
           <input className="input" type="text" placeholder='Enter Password'/>
           <div className='icon'>
           
           </div>
           </div>


           <div className="forget_password">
            <div className='forget_password1'>Forget Password ?</div>
            <div> <input type="checkbox"/>
            <label for="vehicle2">Remember me</label></div>
           
            </div>
            <div><Link to='/website'><button className='login_btn'>Login</button></Link>
            </div>
            <div className='last'>Already have an account?<Link to='/signup'> <span className='span'>Sign In</span></Link></div>


        </div>
        <Footer/>
           
    </div>
     
  )
}

export default SignUp