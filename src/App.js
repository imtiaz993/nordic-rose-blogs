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
import Footer from './components/Footer';
import { useAuthContext } from './hooks/useAuthContext'


import './App.css';


function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div>
     {authIsReady && (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path="/" element ={<Home/>}/>
            <Route  path="/About" element ={<About/>}/>
            <Route  path="/Login-Signup" element ={!user ? <Signup/> : <Home/> }/>
            <Route  path="/Login" element = {!user ? <Login/> : <Home/>}/>
            <Route  path="/Dashboard" element = {user ? <Dashboard/> : <Signup/>}/>
            <Route  path="/Create" element ={user ? <Create/> : <Signup/>}/>
            <Route  path="/Blogs/:id" element ={<Blog/> }/>
            <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
     )}
     </div>
  );
}

export default App;
