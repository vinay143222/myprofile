import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Sendmail} from '../../actions/action';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
export default function Change() {
  const navigate=useNavigate();
    const dispatch=useDispatch();
    const [useremail,setemail]=useState({
        email:'',
    });
    const Updatepassword=(e)=>{
        e.preventDefault();
        dispatch(Sendmail(useremail,navigate));
    }
    return (
        <div>
            <div class="container" style={{height:'100%'}}>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius:'25px'}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p class=" rest-para  text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Resetpassword</p>
                <form onSubmit={Updatepassword}>
            <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" onChange={(e)=>setemail({...useremail,email:e.target.value})} />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                   <button type="submit" class="btn btn-primary btn-lg">submit</button>
                  </div>
                  </form>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
        </div>
    )
}
