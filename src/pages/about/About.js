import React from 'react'
import Footer from '../../components/Footer';
import './About.css'
const About = () => {
    return (<>
        <div className='aboutcontainer'>
            <h1 className='about'>ABOUT</h1>
            <div>
            <h2>How this file can be used</h2>
            <p className='borderL'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat odit at incidunt delectus officia tempora. Nostrum asperiores delectus numquam modi, quasi culpa, dicta reiciendis rem possimus eaque perspiciatis repellat?
            
            </p>
            </div>
            <div>
            <h2>A note about typefaces</h2>
            <p className='borderL'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat odit at incidunt delectus officia tempora. Nostrum asperiores delectus numquam mod
            </p>
            </div>
           <div>
           <h2>Fonts used on the live site</h2>
           <div className='borderL'>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat odit at incidunt delectus officia tempora.
            </p>
            <h2>GTF Chapter</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat odit at incidunt delectus officia tempora.
            </p>
            <h2>Mackay Bold</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <h2>Harriet Text</h2>
            <p>
                body copy
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat odit
            </p>
            <h2>Basis Groesque Pro</h2>
            <p>
                UI elements, some subtitles and some body copy
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat odi
            </p>
            <h2>Nokia CellPhone</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
           </div>
           </div>
           
         
        </div>
        <Footer/>
        </>
    )
}

export default About;