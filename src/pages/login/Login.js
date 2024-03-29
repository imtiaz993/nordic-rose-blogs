import { useState,useEffect } from 'react'
import { useLogin } from '../../hooks/useLogin'
import {Link,useNavigate} from "react-router-dom";
import { useAuthContext } from '../../hooks/useAuthContext';
import Footer from '../../components/Footer';


// styles
import './Login.css'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin()
  const { user } = useAuthContext()
  const Navigate = useNavigate();

  useEffect(() => {
    if(user)
    Navigate('/')
 }, [user,Navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    
    
  
   
  }

  return (< div className='fff'>
    <form onSubmit={handleSubmit} className="logform">
      <h2 className="create1">Login</h2>
      <label>
        
        <input
          required
          placeholder='Email'
          type="email" 
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
      {!isPending && <button className="btn">Log in</button>}
      {isPending && <button className="btn" disabled>Logging In...</button>}
      {error && <div className="error">{error}</div>}
    </form>
    <Footer/>
    </div>
  )
}
