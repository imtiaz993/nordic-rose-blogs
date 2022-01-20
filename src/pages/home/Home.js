import React from 'react'
import { Link } from 'react-router-dom'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'

import './Home.css'
const Home = () => {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('blogs')

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {documents && 
      <>
      <div className="blog-container">
      {documents.length === 0 && <p>No blogs yet!</p>}
      <Link to={`/Blogs/${documents[0].id}`} key={documents[0].id}>
          <img className='blog-img' src={documents[0].imgUrl}/>
          <h2 className='blog-title'>{documents[0].title}</h2>
        </Link>
        
        </div>
        
        <div className='all-articles' >
          <h1>All Articles</h1>
          </div>
       <div className='other-blogss'>
      {documents.map(document => (
        
        <div className='each-blogg'  key={document.id}>
        
        <Link  to={`/Blogs/${document.id}`}>
          <img className='blog-imgg' src={document.imgUrl}/>
          <h4 className='blog-titlee'>{document.title}</h4>
        </Link>
        </div>
      ))}
    </div>
    </>
      }
      
    </div>
  )
}

export default Home
