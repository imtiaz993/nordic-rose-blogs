import React from 'react'
import { Link } from 'react-router-dom'
import './SigninAlert.css'




const SigninAlert = ({setSigninAlert}) => {
 
  return (
      <>
     <div class="modal">
  <h6 class="message">Can't perform action. Make Sure to Login<br/></h6>
  <div class="options">
    <button class="Sbtn btn" onClick={()=>{setSigninAlert(false)}}>Cancel</button>
    <button class="Sbtn btn btnBlack"><Link to='/Login-Signup'>Login/Signup</Link></button>
  </div>
</div>
    </>
  )
}

export default SigninAlert