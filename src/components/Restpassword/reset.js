
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ChangePassword} from '../../actions/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const  Reset=()=> {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const time=useSelector((state)=>( console.log(state.Mail)));
    const [user,setuser]=useState({
        code:'',
    })
    const UpdateSubmit=(e)=>{
        e.preventDefault();
        dispatch(ChangePassword(user, navigate))
    }
    return (
        <div>
            <div className="container height-100 d-flex justify-content-center align-items-center">
                <div className="position-relative">
        <div class="card p-2 text-center">
            <h6>Please enter the one time password  to verify your account</h6>
            <div> <span>A code has been sent to</span> <small>*******9897</small> </div>
            <form onSubmit={UpdateSubmit}>
            <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2"> 
            <input class="m-2 text-center form-control " type="text" id="first" maxlength="4" onChange={(e)=>(setuser({...user,code:e.target.value}))} />
             
  </div>
                            <div class="mt-4"> <button class="buttonload px-4 validate" type="submit">  <i class="fa fa-refresh fa-spin"></i>Validate</button> </div>
            </form>
        </div>
        <div class="card-2">
            <div class="content d-flex justify-content-center align-items-center"> <span>Didn't get the code</span> <a href="#" class="text-decoration-none ms-3">Resend(1/3)</a> 
            <p></p>
            </div>
        </div>
    </div>
                    
                
            </div>
        </div>
    )
}

export default Reset;