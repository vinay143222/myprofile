import React from 'react';
import Navbar from '../Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../images/vinaykumar.jpeg';
const About = () => {
    return (<div>
        <Navbar />
          <div  class="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={image} alt="profile-image" srcset="" style={{width:'300px',borderRadius:'10px 10px 10px 10px '}} />
                </div>
            </div>
          </div>
    </div>)
}
export default About;