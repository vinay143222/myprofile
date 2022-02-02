import React from 'react';
import Form from './components/Form/form';
import Home from './components/Home/home';
import About from './components/About/About';
import Project from './components/Projects/project';
import Contact from './components/Contact/contact';
import Profile from './components/Profile/Profile';
import ForgetForm from './components/ForgetForm/change';
import Restpassword from './components/Restpassword/reset';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Form/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/forgetForm" element={<ForgetForm/>}></Route>
          <Route path="/restpassword" element={<Restpassword/>}></Route>
       </Routes>
        </BrowserRouter>
        );
}
export default App;