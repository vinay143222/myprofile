import React from 'react'
import Navbar from '../Navbar/navbar';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
export default function Project() {
    const user=useSelector((state)=>(state.Auth.authData.token));
   
    const  dispatch=useDispatch();
    const sendId=(id)=>{
       
    }
    return (
        <div>
            <Navbar/>
            <div className="container" style={{marginTop:'10px'}}>
                <div className="row">
                    <div className="col-lg-4">
         <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text" style={{color:'black'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type="submit" class="btn btn-primary" onClick={sendId}>Button</button>
  </div>
</div>
        </div>
        </div>
        </div>
        </div>
    )
}
