import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import '../../../src/style.css';
import { useSelector } from 'react-redux';
export default function Navbar() {
    const userimage=useSelector((state)=>(state?.Auth?.authData?.result?.imageUrl));
    return (
        <div>
            <nav class="navbar navbar-expand-lg" >
  <div class="container-fluid">
    <img  src= "https://img.search.brave.com/SvELeFEw3bLEeefDI-D-K6m1nxCOy4bwLLuIvNWxkC8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jbWt0/LWltYWdlLXByZC5m/cmVldGxzLmZhc3Rs/eS5uZXQvMC4xLjAv/cHMvNzIzMzQ3Ni8x/ODIwLzEyMTQvbTEv/ZnBudy93bTAvY3Jl/YXRpdmUtdi1sZXR0/ZXItbG9nby1kZXNp/Z24taW5zcGlyYXRp/b24td2l0aC1saW9u/LWZhY2UtLmpwZz8x/NTcyNjU5MzAxJnM9/MWQ2YjE5ZDAyMGMz/NGMxNzI0NTJjMTZm/ZWNhM2FlOTI" alt="logo" class="navbar-brand" style={{width:'100px',borderRadius:'50px'}} />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <img src={userimage} alt="user image" srcset="" style={{borderRadius:'50%',height:'50px'}} />
        </li>
        <li className="nav-item">
         <Link class="nav-link" to="/home" style={{color:'white'}}>HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about" style={{color:'white'}}>ABOUT</Link>
        </li>
       <li class="nav-item">
         
           <Link class="nav-link" to="/project" style={{color:'white'}}>PROJECT</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" to="/profile" style={{color:'white'}}>PROFILE</Link>
          
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact" style={{color:'white'}}>CONTACT</Link>
        </li>
      </ul>
 
    </div>
  </div>
</nav>
        </div>
    )
}
