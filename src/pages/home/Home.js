import React from 'react'
import { Link } from 'react-router-dom'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import Footer from '../../components/Footer';
import MySpinner from '../../components/MySpinner';
import './Home.css'
const Home = () => {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('blogs')
  let data;
  if(documents!==null){
    data=documents;
  }
  
  console.log(documents )
  let mostliked;
  let remaining;
  if(documents!==null){
     mostliked =data.reduce(function(prev,current){
      return (prev.likes>current.likes) ? prev : current
    })
    remaining=documents.filter(document => document.id!== mostliked.id)

  }
  return (
    <>
    <div>
      {error && <p className="error">{error}</p>}
      {console.log(error+" errrrrror")}
      {!error && !documents && <MySpinner/>}
      {documents && 
      <>
      <div className="blog-container">
      {documents.length === 0 && <p><br/>No blogs to display<br/><br/><br/>Please check your internet Connection</p>}
      {mostliked!==null &&
      <Link to={`/Blogs/${mostliked.id}`} key={mostliked.id}>
        <div className='b-img'>
        <span style={{fontSize:'16px',color:'slateGray'}}>Most liked blog</span>
          <img className='blog-img' src={mostliked.imgUrl}/>
          </div>
         
          <h2 className='blog-title'>{mostliked.title}</h2>
        </Link>
        
      }
      </div>
        
        <div className='all-articles' >
          <h1>All Articles</h1>
          </div>
       <div className='other-blogss'>
      {remaining.map(document => (
        
        <div className='each-blogg'  key={document.id}>
        
        <Link  to={`/Blogs/${document.id}`}>
          <img className='blog-imgg' src={document.imgUrl}/>
          <h4 className='blog-titlee'>{document.title}</h4>
        </Link>
        </div>
      ))}
    </div>
    <Footer/>
    </>
      }
      
    </div>
    
    </>
  )
}

export default Home
