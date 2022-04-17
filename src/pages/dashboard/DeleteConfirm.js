import React from 'react'
import './DeleteConfirm.css'
import { useFirestore } from '../../hooks/useFirestore'
const DeleteConfirm = ({setDeleteAlert,Delete}) => {
    console.log(Delete)
    const {deleteDocument}=useFirestore('blogs')
   
    return (
        <div className='overlay'>
             <>
     <div class="modal">
         <h2 className='areyousure'>Are You Sure?</h2>
         <br/>
  <h6 class="mymessage">Your blog will be <span style={{color:'red'}}><b>deleted</b></span> and you will no longer be able to access it.</h6>
  <div class="options">
    <button class="dltbtn btn " onClick={()=>{setDeleteAlert(false)}}>Cancel</button>
    <button class="dltbtn btn btnBlack" onClick={()=>{deleteDocument(Delete);setDeleteAlert(false)}}>Yes,I'm sure</button>
  </div>
</div>
    </>
        </div>
    )
}

export default DeleteConfirm
