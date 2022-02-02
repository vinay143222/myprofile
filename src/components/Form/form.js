import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Signin, Login } from '../../actions/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import './style.css';
import { Link } from 'react-router-dom';
const Form = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setlogin] = useState(false);

  const [user, setuser] = useState({
    firstname: '',
    email: '',
    password: "",
    confirmpassword: ''
  })
  const updateForm = () => {
    setlogin((prevalue) => !prevalue);
  }


  const Handlesubmit = (e) => {
    e.preventDefault();
    if (login) {
      dispatch(Login(user, navigate));
    }
    else {
      dispatch(Signin(user, navigate));
    }

  }
  const googleSuccess=async(res)=>{
     const result=res?.profileObj;
     const tokenId=res?.tokenId;
     try {
       dispatch({type:'AUTH',data:{result,tokenId}});
       navigate('/home');
     } catch (error) {
       console.log(error);
     }
  }
  const googleError=(res)=>{
    console.log(res)
  }
  return (
  
    <div class="container" style={{ height: '100%' }}>
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style={{ borderRadius: '25px' }}>
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{login === false ? `Signup` : `Login`}</p>


                  <form class="mx-1 mx-md-4" onSubmit={Handlesubmit}>
                    {login === false &&
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" class="form-control" onChange={(e) => setuser({ ...user, firstname: e.target.value })} required />
                          <label class="form-label" for="form3Example1c">Your Name</label>
                        </div>
                      </div>
                    }
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" class="form-control" onChange={(e) => setuser({ ...user, email: e.target.value })} required />
                        <label class="form-label" for="form3Example3c">Your Email</label>
                      </div>
                    </div>


                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" class="form-control" onChange={(e) => setuser({ ...user, password: e.target.value })} required  minLength={10}/>
                        <label class="form-label" for="form3Example4c">Password</label>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4cd" class="form-control" onChange={(e) => setuser({ ...user, confirmpassword: e.target.value })} required />
                        <label class="form-label" for="form3Example4cd">Repeat your password</label>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" class="btn btn-primary btn-lg">{login === false ? `Register` : `Login`}</button>
                    </div>
                    <div class="justify-content-center col-lg-12">
                      <p type="button" onClick={updateForm}>{login === false ? `Already have Account` : `Don'have Account`}</p>

                      {login === true && <p><Link to="/forgetForm">ForgetPassword</Link></p>}
                    </div>
                      <GoogleLogin
            clientId="51905510281-q8m47du8pl57c1kse5g27c7fcigacmma.apps.googleusercontent.com"
            render={(renderProps) => (
              <button  className ="btn btn-primary" onClick={renderProps.onClick} disabled={renderProps.disabled}>
               {login===true? `login with google `:`Signup with google`}
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
                  </form>

                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Form;