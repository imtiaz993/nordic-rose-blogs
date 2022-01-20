import { useState } from "react"
import { timestamp } from "../firebase/config"
import { useAuthContext } from "../hooks/useAuthContext"
import { useFirestore } from "../hooks/useFirestore"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './Comment.css'
import SigninAlert from "./SigninAlert"


export default function Comments({ project,id,setComment}) {
  console.log(project)
  const { user } = useAuthContext()
  const { updateDocument, response } = useFirestore('blogs')
  const [newComment, setNewComment] = useState('')
  const [signinAlert,setSigninAlert]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!user){setSigninAlert(true)}
    if(user){
      const commentToAdd = {
        displayName: user.displayName,
        photoURL: user.photoURL,
        content: newComment,
        createdAt: timestamp.fromDate(new Date()),
        id: Math.random()
      }
    
     
      await updateDocument(id, {
        comments: [...project.comments, commentToAdd],
      })
      if (!response.error) {
      
        setNewComment('')
      }
    }
    
  }

  return (
    <div className="project-comments">
      <h3 className="com-btn">Blog Comments<span><button onClick={()=>{setComment(false)}}>X</button></span></h3>
      
    {signinAlert && <SigninAlert setSigninAlert={setSigninAlert}/>}
      <ul className="comments-list">
        {project.comments && project.comments.map(comment => (
          <li className="each-comment" key={comment.id}>
            <div className="comment-author">
              <img width="25" src={comment.photoURL} />
              <div className="det">
               
              <p className="name" >{comment.displayName}</p>
              <p className="time">{formatDistanceToNow(comment.createdAt.toDate(), {addSuffix: true})}</p>
              </div>
            </div>
            
            <div >
              <p className="comment-content">{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>

      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
         
          <textarea 
          required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="comment-btn">Add Comment</button>
      </form>
    </div>
  )
}