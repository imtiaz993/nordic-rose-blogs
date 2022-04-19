import React, { useState,useEffect } from 'react'
import { useCollection } from '../../hooks/useCollection'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import {Link, useNavigate} from "react-router-dom";
import { useFirestore } from '../../hooks/useFirestore';
import Create from '../create/Create'
import './Dashboard.css'
import DeleteConfirm from './DeleteConfirm';
import Footer from '../../components/Footer';
import MySpinner from '../../components/MySpinner';
import EditItem from './EditItem'

const Dashboard = () => {
  const history =useNavigate()
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()
  const {deleteDocument}=useFirestore('blogs')
  const [edit,setEdit]=useState(false)
  const [docEdit,setDoc]=useState(null);
  const { documents, error } = useCollection('blogs')
  const [sendDoc,setSendDOc]=useState();
  const [deleteAlert,setDeleteAlert]=useState(false)
  useEffect(() => {
    if(!user)
    history('/Signup')
 }, [user,history])
  const document=documents ? documents.filter(doc => {
   
    return doc.createdBy.id===user.uid
  }):null
  return (
  
    <div className='dash'>
  {!edit &&  <div className='LogCreate'>
    
            {document &&  !isPending && <button className="btn" onClick={logout}>Logout</button>}
            {isPending && <button className="btn" disabled>Logging out...</button>}
            {document && <Link to='/Create'><button className="btn">Create Blog Post</button></Link>}
    </div>
    }
   {!edit && <><div>
      {error && <p className="error">{error}</p>}
      {!document && !error && <MySpinner/>}
      {document && 
      <div className="dash-blogs-list">
      {document.length === 0 && <p>No blogs yet!</p>}
      {document && <> <div className='whole-blog'>{
      document.map(doc => (
        
        <div className="my-blog" key={doc.id}>
         
        {deleteAlert &&  <DeleteConfirm setDeleteAlert={setDeleteAlert} Delete={sendDoc} />}
          <img className='dash-img' src={doc.imgUrl}/>
          <div className='edit-delete-title'>
            
            <h4 className='dash-title'>{doc.title}</h4>
            <div>
            <button className='edit-delete' onClick={() => { setEdit(true);setDoc(doc) }}><i class="fas fa-pencil-alt"></i></button>
            <br/>
          <button className='edit-delete' onClick={()=>{setDeleteAlert(true);setSendDOc(doc.id)}}><i class="fas fa-trash"></i></button>
            </div>
          </div>

         
        </div>
          
      ))}
      </div>
      <Footer/>
          </>
}
    </div>
      }
      
    
    </div>
    </>}
    {edit && <EditItem Edit={setEdit} document={docEdit}/>}
    
    </div>
  )
}

export default Dashboard
