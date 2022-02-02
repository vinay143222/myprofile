import React from 'react';
import { useState} from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../Navbar/navbar';
import { useSelector } from 'react-redux';
import '../../../src/style.css';
const Home=()=>{
  const [user,setuser]=useState({});
  const currentuser=useSelector((state)=>(state?.Auth));
  useEffect(()=>{
    setuser((prev)=>{
      return {...prev,currentuser}
    })
  },[])
   const date=new Date;
     const currentYear=date.getFullYear();
    return (
 
 <div>  
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col-lg-6">
            <img src="https://wallpapercave.com/wp/wp8903893.jpg" alt="home-logo" className="home-image"/>
        </div>
        <div className="col-lg-6">
            <p className="home-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut pulvinar diam. Morbi vel consequat risus. Phasellus pellentesque, libero a dictum feugiat, ipsum mauris volutpat lectus, vel sagittis sapien arcu in velit. Vestibulum finibus placerat pellentesque. Nulla vel nunc vel magna semper placerat et rutrum tellus. Donec mollis eros quam. In et dui eget nisl dapibus luctus. Suspendisse potenti. Integer lobortis a tortor et scelerisque. Ut velit lectus, accumsan at molestie eget, accumsan vel elit. Suspendisse vestibulum dolor id dictum ullamcorper</p>
        </div>

     <hr style={{backgroundColor:'white',marginTop:'10px',height:'5px'}}/>
    </div>

    <div className="container">
        <div className="row">
            <div className="col-lg-4">
              <div class="card text-left">
                <img class="card-img-top" src="https://img.search.brave.com/5ix7ja9lpVQ4ekPc6ho6LkZqq-b0FsC2NtomUkxogVw/rs:fit:1200:1000:1/g:ce/aHR0cDovLzIuYnAu/YmxvZ3Nwb3QuY29t/L19vcFM5WjV2cVFZ/US9UVFlyTUhYTmlS/SS9BQUFBQUFBQUFW/QS9IMGdKMm9Db0JU/Zy9zMTYwMC9odG1s/NV9iZ19ub19pY29u/cy5wbmc" alt="html image" className="image-template"/>
                <div class="card-body">
                  <h4 class="card-title" style={{color:'black',textAlign:'center'}}>HTML</h4>
                  <p class="card-text"  style={{color:'black',fontSize:'15px',lineBreak:'inherit'}}>
The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card text-left">
                <img class="card-img-top"src="https://img.search.brave.com/oL2qmqpQQa5PJk6B0kRhPuDufraEHKb-Q7-NLx5YvGo/rs:fit:1200:500:1/g:ce/aHR0cHM6Ly93d3cu/dzNjYXJlLmNvbS9p/bWFnZXMvdXBsb2Fk/cy90ZWNobm9sb2dp/ZXMvd2ViLWdyYXBo/aWMtZGVzaWduL2Nz/cy1iYW5uZXIuanBn" alt="css" className="image-template"/>
                <div class="card-body">
                  <h4 class="card-title" style={{color:'black',textAlign:'center'}}>CSS3</h4>
                  <p class="card-text"  style={{color:'black',fontSize:'15px',lineBreak:'inherit'}}>
 Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card text-left">
                <img class="card-img-top" src="https://img.search.brave.com/HVeSprYdnB_JypRDLZsspQM3KRh0OsTLCZ1Zr1i2piI/rs:fit:1024:640:1/g:ce/aHR0cHM6Ly9tYXJj/YXMtbG9nb3MubmV0/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzExL0phdmFTY3Jp/cHQtbG9nby0xMDI0/eDY0MC5wbmc" alt="js image" className="image-template"/>
                <div class="card-body">
                  <h4 class="card-title" style={{color:'black',textAlign:'center'}}>JavaScript</h4>
                  <p class="card-text"  style={{color:'black',fontSize:'15px',lineBreak:'inherit'}}>
JavaScript (/ˈdʒɑːvəˌskrɪpt/), often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
     <footer>
           <p style={{textAlign:'center'}}>copy rights{ `@` +currentYear}</p>
     </footer>
</div>
</div>
    )
}
export default Home;