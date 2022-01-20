import { useState, useEffect } from 'react'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import { timestamp } from '../../firebase/config'
import { useFirestore } from '../../hooks/useFirestore'
import { useNavigate } from 'react-router'
import Select from 'react-select'

// styles
import './Create.css'

const tags = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
]

export default function Create({edit,sendDoc}) {
  console.log(edit)
  const { documents, error } = useCollection('blogs')
  const history = useNavigate()
  const { addDocument,updateDocument, response } = useFirestore('blogs')
  const { user } = useAuthContext()
 

  // form field values
  const [title, setTitle] = useState()
  const [img, setImg] = useState()
  const [content, setContent] = useState()
  const [time, setTime] = useState()
  const [tag, setTag] = useState()
  const [formError, setFormError] = useState(null)
  const [imgError,setImgError]=useState(null)
  
 
  const handleFileChange = (e) => {
    setImg(null)
    let selected = e.target.files[0]
    console.log(selected)

    if (!selected) {
      setImgError('Please select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setImgError('Selected file must be an image')
      return
    }
    if (selected.size > 1000000) {
      setImgError('Image file size must be less than 1MB')
      return
    }
    
    setImgError(null)
    setImg(selected)
    console.log('thumbnail updated')
  }
 

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    if (!tag) {
      setFormError('Please select a project category.')
      return
    }
    

  
    const createdBy = { 
      displayName: user.displayName, 
      photoURL: user.photoURL,
      id: user.uid
    }

    const project = {
      title:title,
      content:content,
      createdBy:createdBy,
      createdAt: timestamp.fromDate(new Date()),
      tag: tag,
      time: time,
      comments: [],
      likes:0,
    }
  
    await addDocument(project,img)
    console.log(response);
    if (!response.error) {
     history('/Dashboard')
    }
 
  
   
  }

  return (
    <div className="cform">
     {!edit && <h2 className="title">Create NEW BLOG POST</h2>}
     {edit && <h2 className="title">UPDATE BLOG POST</h2>}
      <form onSubmit={handleSubmit}>
        <div className='form-flex'>
        <div >
        <label>
          <span>Title</span>
          <br/>
          <input
          className='input'
            required 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        </div>
        <div>
        <label>
          <span>Tag</span>
          <br/>
          <Select 
            className="select"
            isMulti='multi'
            onChange={(option) => setTag(option)}
            
            options={tags}
          />
        </label>
        </div>
       
        <div>
        <label>
       
          <span>Read Time</span>
          <br/>
          <input
          className='input'
            required 
            type="text" 
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
        </label>
        </div>
        <div className='att3'>
        <label className='att2'>
      <span className='att4'>Attachment</span>
      <input
      
        className='att1 input'
        required
        type="file"
        
        onChange={handleFileChange}
      />
      
    </label>
        </div>
        
        </div>
        <div>
         <label>
          <span>Content</span>
          <br/>
          <textarea 
            required
            onChange={(e) => setContent(e.target.value)}
            value={content} 
          ></textarea>
        </label>
        </div>
        {!edit && <button className="btn" >Create</button>}
        {edit && <button className="btn" >Update</button>}

        {formError && <p className="error">{formError}</p>}
        {imgError && <div className="error">{imgError}</div>}
      </form>
    </div>
  )
}
