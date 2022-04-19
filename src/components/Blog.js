import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useDocument } from '../hooks/useDocument'
import { Link } from 'react-router-dom'
import { useCollection } from '../hooks/useCollection'
import { useFirestore } from '../hooks/useFirestore'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Comment from './Comment'
import './Blog.css'
import SigninAlert from './SigninAlert'
import { useAuthContext } from '../hooks/useAuthContext'
import Footer from '../components/Footer';
import MySpinner from './MySpinner'

const Blog = () => {
  
  const { id } = useParams()
  const {user} = useAuthContext();
  const { document, error } = useDocument('blogs', id)
  const { documents, error2 } = useCollection('blogs')
  const {updateDocument,response}=useFirestore('blogs')
  const [signinAlert,setSigninAlert]=useState(false)

  const [liked,setLiked]=useState(false);
  const [comment,setComment]=useState(false);
  let remaining;
  if(documents){
   
    remaining=documents.filter(document => document.id!== id)

  }
  useEffect(()=>{
    window.scrollTo({top:0,behavior:'smooth'})
    
  },[id])
  console.log(document);
  const like=(id,likes)=>{
    if(!liked){
   
      updateDocument(id,{likes:likes+1})
    }
    if(liked){
      console.log("disliked")
      updateDocument(id,{likes:likes-1})
    }
  

  }


  return (
    <div className='bbb'>
      {!error && !document && <MySpinner/>}
      {error && <p className="error">{error}</p>}
      {document &&
        <>
      
          <div className="blog-container1">

            <h1 className='blog-title1'>{document.title}</h1>
            <div className='a-img'>
            <img className='blog-img1' src={document.imgUrl} />
            </div>
            <div className='content-comment'>
            
            <div className='content'>
            
              <div className="blog-auth">
              
                  <div className='auth-time'>
                  
                    <img className='author-img' src={document.createdBy.photoURL} />
                   
                    <div>
                      <p className='author-name'>{document.createdBy.displayName}</p>
                      <p className='read-time'>{formatDistanceToNow(document.createdAt.toDate(), {addSuffix: true})} - {document.time} min read</p>
                    </div>
                    

                  



                </div>

               

              </div>
              <p className='actual-content'>{document.content}</p>
              <div className='react'>
              <button className='like' onClick={()=>{if(user){setLiked(!liked);like(id,document.likes)} ;if(!user){setSigninAlert(true)}}}>{document.likes}<i className="fas  fa-lg fa-thumbs-up"></i></button>
                <button className='comment' onClick={()=>{setComment(!comment)}}>{document.comments.length}<i className="fas fa-lg fa-comment-alt"></i></button>
              </div>
              <div>{comment && <Comment project={document}id={id} setComment={setComment}/>}</div>
              {signinAlert && <SigninAlert setSigninAlert={setSigninAlert}/>}
              <span className='tag'>Tags:
                {document.tag.map((t, index) => (
                  <span  key={index}>{t.value}</span>
                ))}
              </span>
            </div>
             


            </div>
            
            <div className='auth-about'>
              <img src={document.createdBy.photoURL} width='50px' />

              <h6><span><b>{document.createdBy.displayName} </b> </span><br/>{document.createdBy.about}</h6>
            </div>
          </div>
          <h1 className='whatreadnext'>What to read next</h1>
          <div className='other-bloggs'>
            {error2 && <div className="error">{error}</div>}
            {!documents && <div className="loading">Loading...</div>}

            {documents && remaining.map(document => (

              <div className='each-blog3' key={document.id}>

                <Link to={`/Blogs/${document.id}`}>
                  <img className='blog-img3' src={document.imgUrl} />
                  <h4 className='blog-title3'>{document.title}</h4>
                </Link>
              </div>
            ))}
          </div>
          <form  className="newsletter-form" onSubmit={(e)=>{e.preventDefault()}}>
            <h2 className="news-title">Sign up for the newsletter</h2>
            <p>If you want relevant updates occasionally, sign up for
              the private newsletter. Your email is never shared. </p>
           
             <div className="news-btn">
              <input
                required
                placeholder='Enter your email ...'
                type="email"
               
              />
               <button className="news-signup">Signup</button>
               </div>
            
            

          </form>
          <Footer/>
        </>
      }

    </div>
  )
}

export default Blog
