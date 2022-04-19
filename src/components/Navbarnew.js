import React from 'react'
import {Link} from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext'
import './Navbarnew.css'
const Navbarnew = () => {
  const { user } = useAuthContext()
  const [expanded,setExpanded]=React.useState(false)
  return (<div className='Nvbar'>
    <div className="nav">
    <input type="checkbox" id="nav-check"/>
    <div className="nav-header">
      <div className="nav-title logo">
      Nordic Rose
      </div>
    </div>
    <div class="nav-btn" onClick={()=>{setExpanded(!expanded)}}>
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div className={expanded ? "nav-links expanded " : "nav-links notexpanded"}>
    <Link onClick={()=>{setExpanded(!expanded)}} className='link' to ="/">Blogs</Link>
        <Link onClick={()=>{setExpanded(!expanded)}} className='link' to ="/About">About</Link>
        {!user &&
        <>
           <Link onClick={()=>{setExpanded(!expanded)}} className='signupbtn link' to ="/Login">Login</Link>
           
           <Link onClick={()=>{setExpanded(!expanded)}} className='signupbtn link' to ="/Signup">Signup</Link>
           </>
        }
        {user &&
        <Link onClick={()=>{setExpanded(!expanded)}} className='signupbtn link' to ="/Dashboard"><img className="userimg" width="30" height='30' src={user.photoURL} />{user.displayName} </Link>
        }
    </div>
  </div>
  </div>
  )
}

export default Navbarnew