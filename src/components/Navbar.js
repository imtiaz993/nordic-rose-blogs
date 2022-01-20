import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext'


const Navbar = () => {
  const { user } = useAuthContext()
  return (
    <div className='navbar'>
      
      <ul>
      <h1 className='logo'>Nordic Rose</h1>  
        <li><Link className='link' to ="/">Blogs</Link></li>
        <li><Link className='link' to ="/About">About</Link></li>
        {!user &&
           <li><Link className='signupbtn link' to ="/Login-Signup">Login/Signup</Link></li>
        }
        {user &&
        <li className='btnbrdr'><Link className='signupbtn link' to ="/Dashboard"><img className="userimg" width="30" src={user.photoURL} />{user.displayName} </Link></li>
        }
       
      </ul>
     
        
        
        
    </div>
  )
}

export default Navbar
