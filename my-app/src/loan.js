
import './baroque.css'
import { Link } from "react-router-dom";


function Loan(){

    return(

<>
<div className="upper-section">
    <header>
      <p>FREE SHIPPING IN PAKISTAN</p>
    </header>
    <div className="main-banner">
    <div className="navbar">
        <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>

               
            </div>  
          <div className="logo">
         
       
              </div>
              <div className="menu-items">
            <li><Link to='/'>Home</Link></li>

            <li><Link to='Unstiched' >Unstiched</Link></li>
            <li><Link to='stiched'>Stiched</Link></li>

            <li><Link to='loan'>Loaan</Link></li>

            <li><Link to='shaal'>Shaal</Link></li>
          </div>
          
   
        </div>


        <div className="baroque-logo">
<Link to='/' style={{textDecoration:'none',color:'Black',fontSize:'22px'}}>BAROQUE</Link>
  
</div>
<div className="left-section">
<div className="dropdown">

  <button className="dropbtn"><div className="triangle-down"></div></button>
  <div className="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
</div>
<div className="images">
<img src="pngwing.com (35).png" alt=""  width={'20px'}/>
<img src="pngwing.com (36).png" alt=""  width={'20px'}/>
<img src="pngwing.com (37).png" alt="" width={'20px'} />
</div>

      </div>
      </div>
     
      </div>
      </div>

</>

    )

}

export default Loan