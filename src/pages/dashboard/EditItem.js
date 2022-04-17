import { useState, useEffect } from 'react'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import { timestamp } from '../../firebase/config'
import { useFirestore } from '../../hooks/useFirestore'
import {Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import Footer from '../../components/Footer'

// styles
import '../create/Create.css'

const tags = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
]

export default function EditItem({Edit,document}) {
    console.log(document)
  const { documents, error } = useCollection('blogs')
  const history = useNavigate()
  const [creating,setCreating]=useState(false)
  const { addDocument,updateDocument, response } = useFirestore('blogs')
  const { user } = useAuthContext()
  useEffect(() => {
    if(!user)
    history('/Login-Signup')
 }, [user,history])

  // form field values
  const [title, setTitle] = useState(document.title)
  const [content, setContent] = useState(document.content)
  const [time, setTime] = useState(document.time)
  const [tag, setTag] = useState(document.tag)
  const [formError, setFormError] = useState(null)


 

  const handleSubmit = async (e) => {
    e.preventDefault()
    setCreating(true)
    setFormError(null)

    if (!tag) {
      setFormError('Please select a project category.')
      return
    }
    

  


    const project = {
      title:title,
      content:content,
      tag: tag,
      time: time,
    }
  
    await updateDocument(document.id,project)
    console.log(response);
    if (!response.error) {
      setCreating(false)
     Edit(false)
   
    }
 
  
   
  }

  return (
    <>
    <div className="cform">
      <div className='title-cross'>
      <div>
     {!Edit && <h2 className="title">Create NEW BLOG POST</h2>}
     {Edit && <h2 className="title">UPDATE BLOG POST</h2>}
     </div>
     <div>
     <button className="X" onClick={() => { Edit(false); }}>X</button>
     </div>
     </div>
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
            maxLength='70'
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
            defaultValue={document.tag}
           
            required
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
            type="number" 
            onChange={(e) => setTime(e.target.value)}
            value={time}
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
        { !creating && <button className="btn" >Update</button>}
        
        {creating && <button disabled className="btn" >Updating...</button>}

        {formError && <p className="error">{formError}</p>}
      </form>
      
    </div>
    <Footer/>
    </>
  )
}
