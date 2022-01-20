import React from 'react'
import './DeleteConfirm'
import { useFirestore } from '../../hooks/useFirestore'
const DeleteConfirm = ({setDeleteAlert,id}) => {
    const {deleteDocument}=useFirestore('blogs')
   
    return (
        <div>
             <>
     <div class="modal">
         <h2 className='areyousure'>Are You Sure?</h2>
         <br/>
         <br/>
  <h6 class="message">Your blog will be <span style={{color:'red'}}><b>deleted</b></span> and you will no longer be able to access it.</h6>
  <div class="options">
    <button class="dltbtn btn " onClick={()=>{setDeleteAlert(false)}}>Cancel</button>
    <button class="dltbtn btn btnBlack" onClick={()=>{deleteDocument(id);setDeleteAlert(false)}}>Yes,I'm sure</button>
  </div>
</div>
    </>
        </div>
    )
}

export default DeleteConfirm
