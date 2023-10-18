
// import About from './about.js';
// import Contact from './contact.js';
import './baroque.css'
import Stiched from './Chantelle.js';
// import Loan from '../src/loan.js';
import Shaal from './Shaal.js';
import Unstiched from './Unstiched.js';
import { useState,useRef,useEffect,useContext } from 'react';
import './baroque.css';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import  {chantelle} from './CartProvider.js'
import CartContext from './CartContext'; // Import CartContext

function BarouqeProject(){
  useEffect(function(){
    document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed

  },[])
// let products=[
  
// {
//   img:'barouqe-img-1.png',
//   name:'Unstiched',
//   id:1
// }
// ,
// {
//   img:'barouqe-img-2.png',
//   name:'Unstiched Loan',
//   id:2
// }
// ,
// {
//   img:'barouqe-img-3.png',
//   name:'Stiched',
//   id:3
// }
// ,
// {
//   img:'barouqe-img-4.png',
//   name:'Shaals',
//   id:4
// }


// ]

const navigatee = useNavigate();
  
    const handleImageClick = (product) => {
     
      navigatee(`/chantelle/chantelleProductDetails?/img=${product.img}&name=${product.name}&id=${product.id}&price=${product.price}&type=${product.type}&/lineImage1=${product.lineImage1}&/lineImage2=${product.lineImage2}&/lineImage3=${product.lineImage3}&/lineImage4=${product.lineImage4}&/lineImage5=${product.lineImage5}&/lineImage6=${product.lineImage6}&size=${product.size}`);
    };

const [sidebarVisible, setSidebarVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  let [search,EnableSearch]=useState(false)

  
const [sidebarVisible2, setSidebarVisible2] = useState(false);
const [dropdownVisible2, setDropdownVisible2] = useState(false);

  function  toggleSidebar () {
    setSidebarVisible(!sidebarVisible);
    if (!sidebarVisible) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
    }
  };

  function  toggleDropdown () {
    setDropdownVisible(!dropdownVisible);
  };

  function  toggleSidebar2 () {
    setSidebarVisible2(!sidebarVisible2);
    if (!sidebarVisible2) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
    }
  };

  function toggleDropdown2 () {
    setDropdownVisible(!dropdownVisible2);
  };

let [stop,setstop]=useState(false)

function toggleFlow(){
  setstop(!stop);
  if (!stop) {
    document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
  } else {
    document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
  }
};

const [isSticky, setIsSticky] = useState(false);
const [isSticky2, setIsSticky2] = useState(false);
const { cart,instock ,addToCart,decreaseFromcart,Find,Finder,Filter,FindShow, setFindShow,Setfilter,handleSearchInputChange,removeFromcart,ChangePrice} = useContext(CartContext); 
// Add a scroll event listener to detect when the navbar becomes sticky

const product = cart.find((product) => product.quantity >0);

useEffect(() => {
  function handleScroll() {
    if (window.pageYOffset >50 /* Add the scroll threshold here */ ) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Attach the scroll event listener when the component mounts
  window.addEventListener("scroll", handleScroll);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

const [activeNote, setActiveNote] = useState(null);
      
// Function to set the active note
function setActive(id) {
  setActiveNote(id);
  // Move the active note to the top of the array
  
}


function se(){
  setIsSticky2(function(o){
    return !o
  })
}


function EnableSearchh(){
  setIsSticky(function(o){
    
    return !o
  })
  EnableSearch(function(o){
    
    return !o
  })
}


// function changer() {
//   console.log("Changer function called"); // Add this line for debugging
//   setmove((prevState) => !prevState);
// }

// Use the useEffect hook to call the changer function when the window width changes





  // Rest of your component code...

 


// ... rest of your code ...

let [currency,setCurrency]=useState('')

function changeCurrency (curr){
  setCurrency(curr)
}
const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

let [showDown,setShowDown]=useState(false)

useEffect(function(){

  const screenWidth = window.innerWidth;

  // Define your threshold size (e.g., 784 pixels)
  const thresholdSize = 784;

  // Check if the screen size crosses the threshold
  const isSmallerThanThreshold = screenWidth < thresholdSize;

  function ShowDown(){
    const screenWidth = window.innerWidth;

    // Define your threshold size (e.g., 784 pixels)
    const thresholdSize = 784;

    // Check if the screen size crosses the threshold
    const isSmallerThanThreshold = screenWidth < thresholdSize;

    // Trigger the function only if the screen size crosses the threshold
    if (isSmallerThanThreshold !== showDown) {
     setShowDown(isSmallerThanThreshold);
    }
  }
  


window.addEventListener('resize', ShowDown);

// Clean up the event listener when the component unmounts
return () => {
  window.removeEventListener('resize', ShowDown);
};
},[showDown])
const [open6, setopen6] = useState(false );
const [open7, setopen7] = useState(false );
const [open8, setopen8] = useState(false );


function Opener6(){
  setopen6(function(o){
return !o
  })
}

function Opener7(){
  setopen7(function(o){
return !o
  })
}

function Opener8(){
  setopen8(function(o){
return !o
  })
}

let[moved,setmovee]=useState(false)

function setmove4(){

  setmovee(function(o){
    return !o
  })

}

let[movedd,setmoveee]=useState(false)

function setmove5(){

  setmoveee(function(o){
    return !o
  })

}


// let findd=cart.find(function(o){return o.priceunit===})
  return(
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200&display=swap" rel="stylesheet" />
      </head>
    <div className="no">
    <header>
      <p>FREE SHIPPING IN PAKISTAN</p>
    </header>
      <div className={`navbar ${isSticky ? "sticky-navbar" : "" }`}>
      <div className={`custom-left ${sidebarVisible ? 'custom-show' : ''}`}>
  <button id="custom-ham" className={`custom-jango ${sidebarVisible ? 'custom-hid' : ''}`} onClick={toggleSidebar} style={{background: 'transparent', border: '0', margin: '0 10px' }}>
    
<div  className="Hamburger-icon"></div>
<div  className="Hamburger-icon"></div>
<div className="Hamburger-icon"> </div>
  </button>

  <div className={`custom-sidebar ${sidebarVisible ? 'custom-show' : ''}`} >
    <div className="custom-cross">
      <p>CART</p>
      <button className="custom-remove" onClick={toggleSidebar}>✖</button>
    </div>
    <hr style={{ color: '#00000039' }} />
    <div className="custom-joke">
      <ul>
<li><Link to='/' >HOME</Link></li>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)'}}/>
<li><Link to='unstiched' >UNSTICHED</Link></li>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)'}}/>
<li><Link to='chantelle' >CHANTELLE</Link></li>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)'}}/>
<li><Link to='loan' >LOAN</Link></li>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)'}}/>
<li><Link to='shaal' >SHAAL</Link></li>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)'}}/>

      </ul>
      <div className="together-7">
      <button className="dropbtn"  onClick={setmove5}><div className="triangle-down"></div></button>
  <div className="dropdown-content" style={{display:movedd?'block':'none',position:'relative'}}>
  <a href="#" onClick={function(){
  console.log(unit)
  ChangePrice(1,'PKR','Rp') 
    }}>PKR</a>

  <a onClick={function(){ChangePrice(290,'USD','$') 
  console.log(unit)
  // Changecurrency(290,'USD','$') 
  
    }}>USD</a>

  <a href="#" onClick={function(){ChangePrice(78.003,'AED','DHS') 
  console.log(unit)
  // Changecurrency(78.003,'AED','DRS') 
    }}>AED</a>
  <a href="#" onClick={function(){ChangePrice(347,'GBP','\u00A3') 
  console.log(unit)
  
    }}>GBP</a>
     <a href="#" onClick={function(){ChangePrice(182,'AUS','$') 
  console.log(unit)
  
    }}>AUS</a>
    <a href="#" onClick={function(){ChangePrice(209,'CAD','$') 
  console.log(unit)
  
    }}>CAD</a>

  </div>
<hr width={'99%'} style={{color:'rgba(0, 0, 0, 0.18)',margin:'20px 0'}}/>

  <img src="pngwing.com (35).png" alt=""  width={'20px'} />
  </div>
    </div>
  </div>
</div>



  



        <div className="baroque-logo">
<Link to='/' style={{textDecoration:'none',color:'Black',fontSize:'22px'}}>BAROQUE</Link>
  
</div>
<div className="left-section">
<div className="dropdown">

  <button className="dropbtn hidden"  onClick={setmove4}><div className="triangle-down"></div></button>
  <div className="dropdown-content" style={{display:moved?'block':'none'}}>
  <a href="#" onClick={function(){
  ChangePrice(1,'PKR','Rp') 
    }}>PKR</a>

  <a onClick={function(){ChangePrice(290,'USD','$') 
  // Changecurrency(290,'USD','$') 
  
    }}>USD</a>

  <a href="#" onClick={function(){ChangePrice(78.003,'AED','DHS') 
  // Changecurrency(78.003,'AED','DRS') 
    }}>AED</a>
  <a href="#" onClick={function(){ChangePrice(347,'GBP','\u00A3') 
  
    }}>GBP</a>
     <a href="#" onClick={function(){ChangePrice(182,'AUS','$') 
  
    }}>AUS</a>
    <a href="#" onClick={function(){ChangePrice(209,'CAD','$') 
  
    }}>CAD</a>

  </div>
</div>
<div className="images">
<img src="pngwing.com (35).png" alt=""  width={'20px'} className='hidden'/>
<img src="pngwing.com (36).png" alt=""  width={'20px'} onClick={function(){
  EnableSearchh()
toggleFlow()
} }style={{cursor:'pointer'}}/>
</div>
<div className={`left ${sidebarVisible2 ? 'show' : ''}`}>
   

      <button id="ham" className={`jango ${sidebarVisible2 ? 'hid' : ''}`} onClick={toggleSidebar2} style={{background: 'transparent',
  border:'0',margin:'0 10px' }}>
<img src="pngwing.com (37).png" alt=""  width={'20px'} /> 

      </button>
      { product ?<div className='dot'><img src='pngwing.com (38).png' width={'14px'}/></div>  : <span></span> }

      <div className={`sidebar ${sidebarVisible2 ? 'show' : ''}`}>
       
        <div className="cross">
          <p>CART</p>
          <button className="remove" onClick={toggleSidebar2}>✖</button>
        </div>
        <hr  style={{color:'#00000039'}}/>
        <div className="joke">
        <ul>
        {cart.map((item) => (
      <>
      <div className="item-details">
     <div className="cart-image">
        <img src={item.img} alt="" width={'120px'} />

     </div>
     <div className="cart-details">
<p  className="p-1">{item.clothtype}</p>
<h5 className="p-2">{item.name}</h5>
<p className="p-3">{item.pricelogo}{item.price}{item.priceunit}</p>
<p className="p-3">{item.quantity}</p>
<p className="p-4">{item.type}</p>
<div className="quantity-checker">
  <div className="add-minus">
    <p onClick={function(){addToCart(item,item.size,item.type)}}>+</p>
    <p>{item.quantity}</p>
    <p onClick={function(){decreaseFromcart(item,item.size,item.type)}}>-</p>
  </div>
<p className="p-5" onClick={function(){removeFromcart(item,item.size,item.type) }}>Remove</p>
  </div>
     </div>
     </div>
    
     </>
    ))}
  </ul>

        </div>
        {cart.length > 0 && (
  <div className="checkout-button">
    <p className='taxes-para'>Taxes and shipping calculated at checkout</p>
    <p className="p-5-5">
      <div className='one-sided'>
        <span className='checkout-name'>CHECKOUT <span style={{marginLeft: '11px'}}>|</span></span>
        <div></div>
      </div>
      <span>{cart[0].pricelogo}</span>
          {(totalPrice.toFixed(2))}
          <span style={{ margin: '0 7px' }}>{cart[0].priceunit}</span>
    </p>
  </div>
  )}
      </div>
      {  sidebarVisible2 &&  <div className="cover-ever">

</div>
}
    </div>
      </div>
      
      </div>
      <div className="all-search-content" style={{display:search?'block':'none'}}>
<div className="search-area">
  <div className="search-area-left">
    <div className="img-search-icon">
  <img src="pngwing.com (36).png" alt=""  width={'20px'}/>
  </div>
<input type="text" placeholder="SEARCH FOR..." value={Find}  onChange={function(o){Finder(o.target.value)
Filter()

}} />




  </div>
  <div className="search-area-right">
    <button  onClick={function(){EnableSearchh()
toggleFlow()
} }>✖</button>
    </div>
</div>
<div className="suggest-3">
  <div className="left-suggest">
<p className='left-suggest-p2' >SUGGESTIONS</p>
<hr className='left-hr'/>

<div className="left-show">

{Find==='' ?'': FindShow.map(function(product){
  return <>
  <div className="lef">
  <span onClick={function(){handleImageClick(product)}}>{product.name}</span>

</div>
  </>

})}
</div>
</div>

<div className="right-suggest">
<p className='right-suggest-p3'>PRODUCTS</p>
<div className="hr-control">
<hr className='right-hr'/>
</div>
<div className="right-show">
  {Find==='' ?'': FindShow.map(function(product){
  return <>
  <div className="all-items">

 <div key={product.id} style={{margin: '19px 6px'}} className='contains-all'>
                <img  onClick={function(){handleImageClick(product)}}
                  src={product.img}
                  alt={product.name}
                    style={{ cursor: 'pointer', }}
                />
               
            {
              product.id===activeNote&& onFront?
  <>
  <div className="overlay"></div>
            <div className="on-front-element">
              <div className="pop-up">
              {/* <img onClick={function(){handleImageClick(product)}}
                  src={product.img}
                  alt={product.name}
                  style={{ cursor: 'pointer' }}
                /> */}
                <div className="remove-button-2">
  
                <button className="remove-3" onClick={function(){
              toggleOnFront()
              toggleSidebar3()
            }}>X</button>
                </div>
            
  
        <>
        <div className="item-details">
       <div className="cart-image">
          <img src={product.img} alt=""  />
  
       </div>
       <div className="cart-details-2">
  <h5 className="p-2">{product.name}</h5>
  <p className="p-3" style={{marginTop: '37px',
    marginBottom: '38px'}}>{product.pricelogo} {product.price}  {product.priceunit}</p>
  <hr />
  
  <p style={{fontSize:'17px' ,}}>COLOR: <span>MAROON</span></p>
  
  
  <div className="quantity-checker-2"><button onClick={SetQuantity2} className='down-sign'>_</button><p>{quantitySelector}</p> <button onClick={SetQuantity}>+</button></div>
  
  <div className="quantity-checker">
    <div className="add-minus-2" style={{margin:' 32px 0'}}>
      <button className='add-button-3' onClick={function(){addToCart(product,selectedSizes[product.id],TypeSelection[product.id])}}>ADD TO CART</button>
      <button className='add-button'>BUY NOW</button>
      <div className="buy-now">
        
      </div>
      <p>{product.quantity}</p>
    </div>
    </div>
       </div>
       </div>
       </>
  
              </div>
            </div>
            </>
              :''
  
  }
                <div className="down-content">

                <p style={{ fontSize: '12px', color: 'black' }} className='middle'>
                  {product.name}
                  <p className='middle' style={{ fontWeight: 'bold' }}>
                 {product.pricelogo} {product.price} {product.priceunit}
                </p>
  
                </p>
                </div>
                
              </div>
              </div>
  </>
  })}
  </div>
</div>
</div>
<div className="search-showing-area">
  


</div>
</div>
     {/* upper Section */}
    <div className="upper-section">
   <div className="square-button-parent">
<Link to='unstiched'><button className="square-button-2" >SHOP NOW</button></Link>
</div>
    <div className="main-banner">
    
      <div className="fg">
<img src="Baroque-6.png" alt="" />
</div>
      </div>
      </div>


{/* MID SECTION */}

 <div className="mid-products-section">
<div className="div">
<Link to='unstiched' ><img src="barouqe-img-1.png" alt="" width={'600px'}/></Link>
<div className="bottom-section">
<h1 style={{color:'white'}}>UNSTICHED</h1>
<Link to='unstiched' ><button className="square-button">SHOP NOW</button></Link>
</div>

</div>
<div className="div">
<Link to='chantelle'><img src="barouqe-img-2.png" alt="" width={'600px'}/></Link>

<div className="bottom-section">
<h1 style={{color:'white'}}>CHANTELLE</h1>
<Link to='chantelle' ><button className="square-button">SHOP NOW</button></Link>

</div>

</div>
<div className="div">
<img src="barouqe-img-3.png" alt="" width={'600px'}/>

<div className="bottom-section">
<h1 style={{color:'white'}}>LOANN</h1>
<button className="square-button">SHOP NOW</button>

</div>

</div>
<div className="div">
<Link to='shaal'><img src="barouqe-img-4.png" alt="" width={'600px'}/></Link>

<div className="bottom-section">
<h1 style={{color:'white'}}>SHAAL</h1>
<Link to='shaal' ><button className="square-button">SHOP NOW</button></Link>

</div>
</div>
</div> 
<footer>
  <div className="starting-footer-hr">
    <hr />
  </div>

<div className="bottom-content">
 <div className="close-open">
<div className="bottom-1">
  <h3>ABOUT</h3>
  <p>     Who We Are  

  </p>
  <p>
  Our Responsibility


  </p>
  <p>
  Service We Provide

  </p>
  <p>
  Careers

  </p>
  <p>
  Legal

  </p>
</div>
<div className="bottom-2">

<h3>CUSTOMER SERVICE</h3>
  <p>     Contact Us
     </p>
    <p>
    Order Tracking

    </p>
    <p>
    Order & Delivery

    </p>
    <p>
    Exchange Information

    </p>
    <p>
    Email: info@baroque.pk

    </p>
    <p>
    Call: +92 325 700 1111

    </p>
    <p>WhatsApp: +92 325 7001111</p>
</div>
<div className="bottom-3">

<h3>POLICIES</h3>
  <p>     Privacy Policy  

  </p>
  <p>
  Refund Policy
  </p>
  <p>
Shipping Policy
  </p>
  <p>
  Terms of Service
  </p>
</div>
</div>

<>
<div className="tab-down">
<hr className='open-hr-2' style={{margin:'20px 20px'}} />
      <div className="on-top" style={{margin:'20px 20px'}}>
      <div className="product-summary-items" onClick={Opener6}>
        <div className="product-item-1">
     <div className="together-4">   <h3 style={{fontSize:'13px' ,margin:'0 0'}}>ABOUT</h3> </div>  

        </div>

        <div  className={`open ${open6 ? 'rotate' : ''}`}>
          +
        </div>
       
      </div>
      <div  className={`product-summary-content ${open6 ? 'opened' : ''}`} >
      <div className="bottom-1">
  <p>     Who We Are  

  </p>
  <p>
  Our Responsibility


  </p>
  <p>
  Service We Provide

  </p>
  <p>
  Careers

  </p>
  <p>
  Legal

  </p>
</div>
        </div>
      </div>
      <hr className='open-hr-2' style={{margin:'20px 20px'}} />
      <div className="on-top" style={{margin:'20px 20px'}}>
      <div className="product-summary-items" onClick={Opener7}>
        <div className="product-item-1">
     <div className="together-4">   <h3 style={{fontSize:'13px' ,margin:'0 0'}}>CUSTOMER SERVICE</h3> </div>  

        </div>

        <div  className={`open ${open7 ? 'rotate' : ''}`}>
          +
        </div>
       
      </div>
      <div  className={`product-summary-content ${open7 ? 'opened' : ''}`} >
      <div className="bottom-2">

  <p>     Contact Us
     </p>
    <p>
    Order Tracking

    </p>
    <p>
    Order & Delivery

    </p>
    <p>
    Exchange Information

    </p>
    <p>
    Email: info@baroque.pk

    </p>
    <p>
    Call: +92 325 700 1111

    </p>
    <p>WhatsApp: +92 325 7001111</p>
</div>
        </div>
      </div>

      <hr className='open-hr-2' style={{margin:'20px 20px'}} />
      <div className="on-top" style={{margin:'20px 20px'}}>
      <div className="product-summary-items" onClick={Opener8}>
        <div className="product-item-1">
     <div className="together-4">   <h3 style={{fontSize:'13px' ,margin:'0 0'}}>POLICIES</h3> </div>  

        </div>

        <div  className={`open ${open8 ? 'rotate' : ''}`}>
          +
        </div>
       
      </div>
      <div  className={`product-summary-content ${open8 ? 'opened' : ''}`} >
      <div className="bottom-3">

  <p>     Privacy Policy  

  </p>
  <p>
  Refund Policy
  </p>
  <p>
Shipping Policy
  </p>
  <p>
  Terms of Service
  </p>
</div>
        </div>
      </div>
      <hr className='open-hr-2'style={{margin:'20px 20px'}} />
      </div>
      </>
</div>
<div className="copyright">
  <div className="in" style={{display:'flex',alignItems:showDown?'center' :'baseline'}}>
  
    <p>© 2023 - BAROQUE</p>
    <div className="adjust-in">
<div className="borders">

<img src="/pngwing.com (39).png" alt="" width={'24px'}/>

</div>
<img src="/pngwing.com (40).png" alt="" width={'34px'}/>
<img src="/pngwing.com (41).png" alt="" width={'36px'}/>

</div>
  </div>
</div>




</footer>
</div>


    </>

  )
}

export default BarouqeProject



{/* <div className="component">
  <div className="top">
  <div className="img-1">
<img src="Xyph6dvBi9oydZYwPdcP4C.png" alt="" />
  </div>
  <div className="down-content">
    <div className="h1">
      <p style={{fontSize:'14px',color:'#7a7a7a'}}>Action</p>
      <h1>Star  Field</h1>
    </div>
<div className="button">
  <button>buy</button>
</div>
  </div>
  </div>
</div> */}