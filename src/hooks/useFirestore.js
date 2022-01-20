import { useReducer, useEffect, useState } from "react"
import { projectFirestore, timestamp ,projectStorage} from "../firebase/config"

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, success: false, error: null }
    case 'ADDED_DOCUMENT':
      return { isPending: false, document: action.payload, success: true, error: null }
    case 'DELETED_DOCUMENT':
      return { isPending: false, document: null, success: true, error: null }
    case 'ERROR':
      return { isPending: false, document: null, success: false, error: action.payload }
    case "UPDATED_DOCUMENT":
      return { isPending: false, document: action.payload, success: true,  error: null }
    default:
      return state
  }
}

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  // collection ref
  const ref = projectFirestore.collection(collection)
  

  // only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
   
    if (!isCancelled) {
      dispatch(action)
    }
  }
  
  // add a document
  const addDocument = async (project,myimg) => {


    try {
  //    const createdAt = timestamp.fromDate(new Date())
  console.log(project);
  console.log(myimg)
      
      
      const uploadPath = `blogsImg/${myimg.name+Math.random(1000).toFixed(3)}`
      const img = await projectStorage.ref(uploadPath).put(myimg)
      const imgUrl = await img.ref.getDownloadURL()
      const addedDocument = await ref.add({...project,imgUrl})
    
     
      
      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
      
    }
    catch (err) {
      console.log("Not");
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
    }
    console.log(("IDK"));
  }

  // delete a document
  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING' })

    try {
      await ref.doc(id).delete()
      dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' })
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not delete' })
    }
  }

  // update a document
  const updateDocument = async (id, updates) => {
    dispatch({ type: "IS_PENDING" })
    console.log(updates);
    try {
      const updatedDocument = await ref.doc(id).update(updates)
      dispatchIfNotCancelled({ type: "UPDATED_DOCUMENT", payload: updatedDocument })
      return updatedDocument
    } 
    catch (error) {
      dispatchIfNotCancelled({ type: "ERROR", payload: error })
      return null
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, updateDocument, response }

}
