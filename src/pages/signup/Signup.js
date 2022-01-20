import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import {Link} from "react-router-dom";
import Login from "../login/Login"

// styles
import './Signup.css'

export default function Signup() {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)
  const { signup, isPending, error } = useSignup()
  const [about, setAbout] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName,about, thumbnail)
  }

  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0]
    console.log(selected)

    if (!selected) {
      setThumbnailError('Please select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return
    }
    if (selected.size > 1000000) {
      setThumbnailError('Image file size must be less than 1MB')
      return
    }
    
    setThumbnailError(null)
    setThumbnail(selected)
    console.log('thumbnail updated')
  }

  return (
    <> <form onSubmit={handleSubmit} className="form">
    <h2 className="create">Create An Account</h2>
    <p className="text">Create an account to enjoy all the<br/>services without any ads for free!</p>
    <label>
      <input
        required
        placeholder='Username'
        type="text" 
        onChange={(e) => setDisplayName(e.target.value)} 
        value={displayName}
      />
    </label>
    <label>
      <input
        required 
        type="email" 
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
      />
    </label>
    <label>
      <input
        required
        placeholder='Password'
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
      />
    </label>
    <label>
          
        
          <textarea 
          placeholder='Write About Yourself'
            required
            onChange={(e) => setAbout(e.target.value)}
            value={about} 
          ></textarea>
        </label>
    <label className="file">
      <span >Profile Image:</span>
      <input
        
        required
        type="file"
        onChange={handleFileChange}
      />
      
    </label>
    {!isPending && <button className="btn">Create Account</button>}
    {isPending && <button className="btn" disabled>Loading....</button>}
    {error && <div className="error">{error}</div>}
    {thumbnailError && <div className="error">{thumbnailError}</div>}
    <p>Already Have an Account?
      <br/>
    <Link to ='/Login' >Sign In</Link></p>
    
  </form>
   
    </>
  )
}
