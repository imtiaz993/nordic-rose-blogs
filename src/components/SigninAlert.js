import React from 'react'
import { Link } from 'react-router-dom'
import './SigninAlert.css'




const SigninAlert = ({setSigninAlert}) => {
 
  return (
      <>
      <div className='overlay'>
     <div class="modal">
  <h6 class="message">Can't perform action. Make Sure to Login<br/></h6>
  <div class="options">
    <button class="Sbtn btn" onClick={()=>{setSigninAlert(false)}}>Cancel</button>
    <button class="Sbtn btn btnBlack"><Link style={{color:'white'}} to='/Signup'>Login/Signup</Link></button>
  </div>
</div>
</div>
    </>
  )
}

export default SigninAlert