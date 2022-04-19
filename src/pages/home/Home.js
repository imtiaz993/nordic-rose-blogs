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
  return (
    <>
    <div className='blg'>
      {error && <p className="error">{error}</p>}
      {console.log(error+" errrrrror")}
      {!error && !documents && <MySpinner/>}
      {documents && 
      <>
      <div className="blog-container">
        
      {documents.length === 0 && <p><br/>No blogs to display<br/><br/><br/>Please check your internet Connection</p>}

{documents && documents.map((mostliked)=>{
                    if(mostliked.id ===    documents.reduce(function(prev,current){return (prev.likes>current.likes) ? prev : current}).id)
                    {
                              //show the popular blog on top
                    return(
                      <Link to={`/Blogs/${mostliked.id}`} key={mostliked.id}>
                      <div className='b-img'>
                      <span style={{fontSize:'16px',color:'slateGray'}}>Most liked blog</span>
                        <img className='blog-img' src={mostliked.imgUrl}/>
                        </div>
                       
                        <h2 className='blog-title'>{mostliked.title}</h2>
                      </Link>
                     )
                    }
                  

                })
              }
      </div>
        
        <div className='all-articles' >
          <h1>All Articles</h1>
          </div>
       <div className='other-blogss'>
       {  
                  documents && documents.map((remaining)=>{
                    if(remaining.id !==documents.reduce(function(prev,current){return (prev.likes>current.likes) ? prev : current}).id){        //show the popular blog on top
                      
                    return(
                      <div className='each-blogg'  key={remaining.id}>
        
                      <Link  to={`/Blogs/${remaining.id}`}>
                        <img className='blog-imgg' src={remaining.imgUrl}/>
                        <h4 className='blog-titlee'>{remaining.title}</h4>
                      </Link>
                      </div>
                     )
                    }
                  

                })
              }
     
    </div>
    <Footer/>
    </>
      }
      
    </div>
    
    </>
  )
}

export default Home
