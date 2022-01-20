import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'


// styles
import './Login.css'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin()
  

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    
    
  
   
  }

  return (
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
      {isPending && <button className="btn" disabled>Loading</button>}
      {error && <div className="error">{error}</div>}
    </form>
  )
}
