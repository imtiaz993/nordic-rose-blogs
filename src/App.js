import React from 'react'
import { BrowserRouter, Routes,Route,Redirect,Switch} from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Blog from './components/Blog'
import NotFound from './pages/notFound/NotFound';
import { useAuthContext } from './hooks/useAuthContext'


import './App.css';
import Navbarnew from './components/Navbarnew';


function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className='app'>
     {authIsReady && (
    <BrowserRouter>
        <Navbarnew/>
        <Routes>
            <Route exact path="/" element ={<Home/>}/>
            <Route  path="/About" element ={<About/>}/>
            <Route  path="/Signup" element ={<Signup/>  }/>
            <Route  path="/Login" element = {<Login/> }/>
            <Route  path="/Dashboard" element = {<Dashboard/> }/>
            <Route  path="/Create" element ={<Create/>}/>
            <Route  path="/Blogs/:id" element ={<Blog/> }/>
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
     )}
     </div>
  );
}

export default App;
