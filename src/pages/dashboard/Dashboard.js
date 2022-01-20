import React, { useState } from 'react'
import { useCollection } from '../../hooks/useCollection'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import {Link, useNavigate} from "react-router-dom";
import { useFirestore } from '../../hooks/useFirestore';
import Create from '../create/Create'
import './Dashboard.css'
import DeleteConfirm from './DeleteConfirm';
const Dashboard = () => {
  const history =useNavigate()
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()
  const {deleteDocument}=useFirestore('blogs')
  const [edit,setEdit]=useState(false)
  const { documents, error } = useCollection('blogs')
  const [sendDoc,setSendDOc]=useState();
  const [deleteAlert,setDeleteAlert]=useState(false)
 
  const document=documents ? documents.filter(doc => {
   
    return doc.createdBy.displayName===user.displayName
  }):null
  return (
    <div>
    <div>
    
            {document && <button className="btn" onClick={logout}>Logout</button>}
            {isPending && <button className="btn" disabled>Logging out...</button>}
            {document && <Link to='/Create'><button className="btn">Create</button></Link>}
    </div>
   {!edit && <div>
      {error && <p className="error">{error}</p>}
      {document && 
      <div className="dash-blogs-list">
      {document.length === 0 && <p>No blogs yet!</p>}
      {document && document.map(doc => (
        <div className="my-blog" key={doc.id}>
         <button className='edit-delete' ><i class="fas fa-pencil-alt"></i></button>
          <button className='edit-delete' onClick={()=>{setDeleteAlert(true)}}><i class="fas fa-trash"></i></button>
        {deleteAlert &&  <DeleteConfirm id={doc.id} setDeleteAlert={setDeleteAlert}/>}
          <img className='dash-img' src={doc.imgUrl}/>
          <h4 className='dash-title'>{doc.title}</h4>
         
        </div>
      ))}
    </div>
      }
      
      
    </div>}
    
    </div>
  )
}

export default Dashboard
