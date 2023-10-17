import { useState,useRef,useEffect,useContext,Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import  {shaal} from './CartProvider.js'
import CartContext from './CartContext.js'; // Import CartContext

import { useLocation } from 'react-router-dom';
import './baroque.css'
// import { Link } from "react-router-dom";

import Slider from "react-slick";// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,

};

function ShaalProductDetails(){

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedProductImg = queryParams.get('/img');
  const selectedProductName = queryParams.get('name');
  const selectedProductId = queryParams.get('id');
  const selectedProductType = queryParams.get('type');
  const selectedProductPrice = queryParams.get('price');
  const selectedClothType = queryParams.get('clothtype');
  const selectedPriceUnit = queryParams.get('priceunit');
  const selectedPriceLogo = queryParams.get('pricelogo');
  const selectedPricee = queryParams.get('pricee');

  const selectedProductSize = queryParams.get('size');
  const selectedProductLineImage1 = queryParams.get('/lineImage1');
  const selectedProductLineImage2 = queryParams.get('/lineImage2');
  const selectedProductLineImage3 = queryParams.get('/lineImage3');
  const selectedProductLineImage4 = queryParams.get('/lineImage4');
  const selectedProductLineImage5 = queryParams.get('/lineImage5');
  const selectedProductLineImage6 = queryParams.get('/lineImage6');
  const { cart, instock,addToCart,decreaseFromcart ,removeFromcart,addToCart2,decreaseFromcart2,quantitySelector,SetQuantity,SetQuantity2,Find,Finder,Filter,FindShow, setFindShow,Setfilter,handleSearchInputChange,ChangePrice,unit,unitChanger} = useContext(CartContext); // Access cart and addToCart from CartContext
  // const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);


const [sidebarVisible2, setSidebarVisible2] = useState(false);
const [dropdownVisible2, setDropdownVisible2] = useState(false);
const [newwindow, setnewwindow] = useState(false);
let [onFront,ShowOnFront ] = useState(false);

const [sidebarVisible3, setSidebarVisible3] = useState(false);

const toggleSidebar3 = () => {
  setSidebarVisible3(!sidebarVisible3);
  if ( !onFront) {
    document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
  } else  {
    document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
  }
};


useEffect(function(){
  document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed

},[])

function toggleOnFront(){
  ShowOnFront(function(o){
    return !o
  })
}
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    if (!sidebarVisible) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
    }
  };
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleSidebar2 = () => {
    setSidebarVisible2(!sidebarVisible2);
    if (!sidebarVisible2) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
    }
  };

  const toggleDropdown2 = () => {
    setDropdownVisible(!dropdownVisible2);
  };


  let [search,EnableSearch]=useState(false)

  
  
let [stop,setstop]=useState(false)

function toggleFlow(){
  setstop(!stop);
  if (!stop) {
    document.body.style.overflow = 'hidden'; // Disable scrolling when the sidebar is open
  } else {
    document.body.style.overflow = 'auto'; // Enable scrolling when the sidebar is closed
  }
};

function EnableSearchh(){
  setIsSticky(function(o){
    
    return !o
  })
  EnableSearch(function(o){
    
    return !o
  })
}
// localStorage.clear('CART')
useEffect(() => {
  Filter();
}, []);
  
const [isSticky, setIsSticky] = useState(false);
const [isSticky2, setIsSticky2] = useState(false);

// Add a scroll event listener to detect when the navbar becomes sticky
function handleScroll(targetElementId) {
  // Scroll to the desired position (e.g., 500 pixels from the top)
  // if(image==='img2'){
  //   'img2'.scrollIntoView({ behavior: 'smooth' });
   
  // }
  const targetElement = document.getElementById(targetElementId);
   if(targetElement){
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

else {
  // Handle the case where the target element is not found
}

}




const carouselImages2 = [
  selectedProductImg,
selectedProductLineImage2,
  selectedProductLineImage3,
  selectedProductLineImage4,
];
const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
const nextImage2 = () => {
  setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % carouselImages2.length);
};

// Function to handle the previous image
const prevImage2 = () => {
  setCurrentImageIndex2((prevIndex) =>
    prevIndex === 0 ? carouselImages2.length - 1 : prevIndex - 1
  );
};

const [isSticky3, setIsSticky3] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    // Calculate the scroll position
    const scrollPosition = window.pageYOffset;

    // Calculate the scroll height and window height
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // Calculate the threshold based on your requirements (e.g., 200 pixels from the bottom)
    const threshold = 1000;

    // Calculate the position to trigger the suggestion
    const triggerPosition = scrollHeight - windowHeight - threshold;

    if (scrollPosition > triggerPosition&& window.innerWidth>800) {
      setIsSticky3(true);
    } else {
      setIsSticky3(false);
    }
  };

  // Attach the scroll event listener when the component mounts
  window.addEventListener("scroll", handleScroll);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

const [TypeSelection, SelectedType] = useState({});
  
    // Function to handle size selection for a product

  
    const handleTypeSlection = (productId, type) => {
      SelectedType((prevSizes) => ({
        ...prevSizes,
        [productId]: type,
      }));
    };
  useEffect(function(){
  
  },[])

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



  // Attach the scroll event listener when the component mounts
  

  
  
const product = cart.find((product) => product.name === selectedProductName) || {
    id: selectedProductId, // Add selectedProductId
    name: selectedProductName,
    img: selectedProductImg,
   type: selectedProductType,
   price:selectedProductPrice,
   size:selectedProductSize,
   pricelogo:selectedPriceLogo,
   priceunit:selectedPriceUnit,
   pricee:selectedPricee

  };
  
useEffect(() => {
  localStorage.setItem('CART', JSON.stringify(cart));
}, [cart]);


function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
}
const selectedProduct = shaal.find((product) => product.id === selectedProductId);



function SetNewWindow(){
  setnewwindow(function(o){
return !o
  })
}

const [activeNote, setActiveNote] = useState(null);
    
// Function to set the active note
function setActive(id) {
  setActiveNote(id);
  // Move the active note to the top of the array
  
}
// const [currentImageIndex, setCurrentImageIndex] = useState(0);

const carouselImages = [
  selectedProductImg,
selectedProductLineImage2,
  selectedProductLineImage3,
  selectedProductLineImage4,
];
let ju

// const initialImageIndex = tell ? 5 : 2;
const clickedImageIndex = carouselImages.findIndex((image) => image === selectedProductImg);

const [currentImageIndex, setCurrentImageIndex] = useState( );

// useEffect(() => {
//   const newIndex = tell ? 5 : 2;
//   setCurrentImageIndex(newIndex);
// }, [tell]);

// Function to handle the next image
const totalImages = carouselImages.length;
const totalImages2 = carouselImages2.length;

// Set the maximum number of images before resetting the index
const maxImages = totalImages ;
const maxImages2 = totalImages2 - 1;

// Update the nextImage function to reset the index to 0
function nextImage() {
  setCurrentImageIndex((prevIndex) => {
    const newIndex = (prevIndex + 1) % totalImages;
    return newIndex === maxImages ? 0 : newIndex;
  });
}

// Update the prevImage function to reset the index to 0
function prevImage() {
  setCurrentImageIndex((prevIndex) => {
    const newIndex = prevIndex === 0 ? totalImages - 1 : prevIndex - 1;
    return newIndex === maxImages - 1 ? 0 : newIndex;
  });
}


// useEffect(() => {
//   if (clickedImageIndex !== -1) {
//     setCurrentImageIndex(clickedImageIndex);
//   }
// }, [selectedProductImg, carouselImages]);






const [open1, setopen1] = useState(false );
const [open2, setopen2] = useState(false );
const [open3, setopen3] = useState(false );
const [open4, setopen4] = useState(false );
const [open5, setopen5] = useState(false );


function Opener1(){
  setopen1(function(o){
return !o
  })
}

function Opener2(){
  setopen2(function(o){
return !o
  })
}

function Opener3(){
  setopen3(function(o){
return !o
  })
}

function Opener4(){
  setopen4(function(o){
return !o
  })
}

function Opener5(){
  setopen5(function(o){
return !o
  })
}


  // Function to handle size selection for a product
 
const product3 = cart.find((product) => product.quantity >0);
  

const increaseQuantity = (productId) => {
    addToCart(cart.find((item) => item.id === productId));
  };

  // Function to decrease the quantity of a specific item in the cart
  const decreaseQuantity = (productId) => {
    const item = cart.find((item) => item.id === productId);
    if (item.quantity > 1) {
      decreaseFromcart(item);
    } else {
      removeFromcart(item);
    }
  };



  const Total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
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
    

    return(

<>
<head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200&display=swap" rel="stylesheet" />
      </head>
    <>
<div className="allll">
<div className="upper-section">
        <header>
          <p>FREE SHIPPING IN PAKISTAN</p>
        </header>
        <div className={`navbar background ${isSticky ? "sticky-navbar" : "" }`} style={{
  borderBottom: '1.5px solid #00000026'}}>
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
      <button className="dropbtn" onClick={setmove5}><div className="triangle-down"></div></button>
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
  <div className="dropdown-content"  style={{display:moved?'block':'none'}}>
  <a href="#" onClick={function(){ChangePrice(1,'PKR','') 
  console.log(unit)
    }}>PKR</a>

  <a onClick={function(){ChangePrice(290,'USD','$') 
  console.log(unit)
  
    }}>USD</a>

  <a href="#" onClick={function(){ChangePrice(78.003,'AED','DHS') 
  console.log(unit)
  
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
</div>
<div className="images">
<img src="/pngwing.com (35).png" alt=""  width={'20px'} className='hidden'/>
<img src="/pngwing.com (36).png" alt=""  width={'20px'}  onClick={function(){EnableSearchh()
toggleFlow()
} }/>
</div>
<div className={`left ${sidebarVisible2 ? 'show' : ''}`}>
   

      <button id="ham" className={`jango ${sidebarVisible2 ? 'hid' : ''}`} onClick={toggleSidebar2} style={{background: 'transparent',
  border:'0',margin:'0 10px' }}>
<img src="/pngwing.com (37).png" alt=""  width={'20px'} /> 

      </button>
      { product ?<div className='dot'><img src='/pngwing.com (38).png' width={'14px'}/></div>  : <span></span> }

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
<p className="p-3">{item.pricelogo} {(item.price*item.quantity).toFixed(2)}  {item.priceunit}</p>
<p className="p-3">{item.quantity}</p>
<p className="p-4">{item.type}</p>
<p className="p-4">{item.size}</p>



<div className="quantity-checker">
  <div className="add-minus">
    <p onClick={() => addToCart2(item,item.size,item.type)}>+</p>
    <p>{item.quantity}</p>
    <p onClick={() => decreaseFromcart2(item,item.size,item.type)}>-</p>
  </div>
<p className="p-5" onClick={function(){removeFromcart(item,item.size,item.type) }}>Remove</p>
  </div>
     </div>
     </div>
     </>
    ))}
  </ul>
{console.log(cart)}
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
          {(Total.toFixed(2))}
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

      <div className="all-search-content" style={{display:search?'block':'none',height:'630px'}}>
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

</div>

<div className="search-showing-area">
  <div className="left-show">

{Find==='' ?'': FindShow.map(function(product){
  return <>
  <div className="lef">
  <span onClick={function(){handleImageClick(product)}}>{product.name}</span>

</div>
  </>

})}
</div>

<div className="right-show">
  {Find==='' ?'': FindShow.map(function(product){
  return <>

  </>
  })}
  </div>
</div>
</div>
      <div className="product-suggestion" style={{display:isSticky3?'flex':'none'}}>
        <div className="inner-content-image">
          <img src={selectedProductImg} alt="" />
        </div>
        <div className="inner-content-price">
          <p>{selectedProductName}</p>
          <p>{selectedProductPrice}</p>
        </div>
        <div className="inner-content-button">
    <button className='add-button-3' onClick={() => addToCart(product)}>ADD TO CART</button>
    </div>
     </div>



      
        
     

{/* down-section */}

<div className="all-content-1">
<div className="li">
<div className="left-side-image-show" >
  <div className="images-4">

<img src={selectedProductLineImage1} onClick={function(){handleScroll('img1')}} alt="" width={'60px'}/>
<img src={selectedProductLineImage2} onClick={function(){handleScroll('img2')}} alt="" width={'60px'}/>
<img src={selectedProductLineImage3}  onClick={function(){handleScroll('img4')}} alt="" width={'60px'}/>

<img src={selectedProductLineImage4} onClick={function(){handleScroll('img5')}} alt="" width={'60px'}/>
<img src={selectedProductLineImage5} onClick={function(){handleScroll('img6')}} alt="" width={'60px'}/>

<img src={selectedProductLineImage6} onClick={function(){handleScroll('img7')}} alt="" width={'60px'}/>
  </div>
</div>
</div>


<div className="on-front-element">
            
          

      <>
      <div className="item-details-main">
     <div className="cart-image-2">
      {newwindow&& <div className="overlay-2">

      <div className="remove-button-2">

</div>
<div className="main-content-2">
<img src={carouselImages[currentImageIndex]} alt="" width={'20%'}/>
  <div className="carasoul-buttons">
  <button  style={{width:'40px'}} className='main-content-2-buttons' onClick={prevImage}>{'<'}</button>
  <button className="main-content-cross" onClick={SetNewWindow}>&#x2715;</button>

  <button style={{width:'40px'}} className='main-content-2-buttons' onClick={nextImage}>{'>'}</button>
  </div>
  </div>

      </div> }


{

<div className="carrying">      
        <img src={selectedProductImg} alt="" id='img1' className='line-image' onClick={function(){ SetNewWindow()
       
        setCurrentImageIndex(0)
        }} />
        

<img src={selectedProductLineImage2} alt="" id='img2' className='line-image' onClick={function(){ SetNewWindow()
setCurrentImageIndex(1)
}}  />
<img src={selectedProductLineImage3} alt="" id='img4' className='line-image' onClick={function(){ SetNewWindow()
setCurrentImageIndex(2)
}} />
<img src={selectedProductLineImage4} alt="" id='img5' className='line-image' onClick={function(){SetNewWindow()
setCurrentImageIndex(3)}} />
<img src={selectedProductLineImage5} alt="" id='img6'className='line-image' onClick={function(){ SetNewWindow()
setCurrentImageIndex(4)
}} />
<img src={selectedProductLineImage6}  id='img7' className='line-image' onClick={function(){ SetNewWindow()
setCurrentImageIndex(5)
}} /> 
</div>}



</div>
<div className="slider-hided">

<Slider {...settings}>
  
  <div>
  <img src={selectedProductLineImage1} alt="" />
  </div>
  
  <div>
  <img src={selectedProductLineImage2} alt="" />
  </div>
  
  <div>
  <img src={selectedProductLineImage3} alt="" />
  </div>
  
  <div>
  <img src={selectedProductLineImage4} alt="" />
  </div>
  
  <div>
  <img src={selectedProductLineImage5} alt="" />
  </div>
  
  
  
  </Slider> 
  </div>

     <div className="big">
        <div className="cart-details-2">
<h5 className="p-2">{product.name}</h5>
<p className="p-3">{product.pricelogo} {product.price}  {product.priceunit}</p>
<div className="cart-details-2-hr-div">
<hr className='cart-details-2-hr'/>
</div>
<p style={{fontSize:'17px' ,}} className='p-8'>TYPE :</p>
<p className="p-4"><button className='type-buttons-1' onClick={() => handleTypeSlection(selectedProductId, 'UNSTICHED')}>UNSTICHED</button> <button className='type-buttons' onClick={() => handleTypeSlection(selectedProductId, 'STICHED')}>STICHED</button>{TypeSelection[selectedProductId]}</p>
<div className="sizes">


<div className="sizes-2">
</div>
</div>
<div className="quantity-checker-2"><button onClick={SetQuantity2} className='down-sign'>_</button><p>{quantitySelector}</p> <button onClick={SetQuantity}>+</button></div>
<div className="quantity-checker">
  <div className="add-minus-2" >
    <button className='add-button-3' onClick={() => addToCart(product, selectedSizes[selectedProductId],TypeSelection[selectedProductId])}>ADD TO CART</button>
    <button onClick={function(){addToCart(product)}} className='add-button'>BUY NOW</button>
    <div className="buy-now">
      
    </div>
    <div className="product-summary-main">

    
    <div className="product-summary">
      <hr className='open-hr' />
      <div className="on-top">
      <div className="product-summary-items" onClick={Opener1}>
        <div className="product-item-1">
     <div className="together-4"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{marginRight:'15px'}} fill="currentColor" class="bi bi-tag" viewBox="0 0 16 16">
  <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/>
  <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"/>
</svg> <p>DESCRIPTION</p> </div>  

        </div>

        <div  className={`open ${open1 ? 'rotate' : ''}`}>
          +
        </div>
       
      </div>
      <div  className={`product-summary-content ${open1 ? 'opened' : ''}`} >
          <p>Lorem ipsum dolor sit, amet consectetur 
            <br />
             Animi adipisci asperiores tempore quaerat, natus 
             <br />
              Distinctio iusto eius optio accusantium natus 
              <br />
              uos beatae ea vero, culpa odio saepe libero ratione 
              <br />
              llam eos nihil corporis quibusdam.</p>
        </div>
      </div>
      <hr className='open-hr'/>
      <div className="on-top">

      <div className="product-summary-items" onClick={Opener2}>
        <div className="product-item-1">
     <div className="together-4"> <img src="/pngwing.com(2).png" alt="" width={'15px'} style={{marginRight:'15px'}}/>  <p>PRODUCT DETAILS</p> </div>  
        </div>
        <div className={`open ${open2 ? 'rotate' : ''}`}>
          +
        </div>
      </div>
      <div  className={`product-summary-content ${open2 ? 'opened' : ''}`}>
          <p>Lorem ipsum dolor sit, amet consectetur 
            <br />
             Animi adipisci asperiores tempore quaerat, natus 
             <br />
              Distinctio iusto eius optio accusantium natus 
              <br />
              uos beatae ea vero, culpa odio saepe libero ratione 
              <br />
              llam eos nihil corporis quibusdam.</p>
        </div>
      </div>


      <hr className='open-hr'/>
      <div className="on-top">

      <div className="product-summary-items" onClick={Opener3}>
        <div className="product-item-1">
     <div className="together-4"> <img src="/pngwing.com(3).png" alt="" width={'15px'} style={{marginRight:'15px'}}/>  <p>CARE INSTRUCTIONS</p> </div>  

        </div>
        <div className={`open ${open3 ? 'rotate' : ''}`}>
          +
        </div>
        
      </div>

  <div  className={`product-summary-content ${open3 ? 'opened' : ''}`}>
          <p>Lorem ipsum dolor sit, amet consectetur 
            <br />
             Animi adipisci asperiores tempore quaerat, natus 
             <br />
              Distinctio iusto eius optio accusantium natus 
              <br />
              uos beatae ea vero, culpa odio saepe libero ratione 
              <br />
              llam eos nihil corporis quibusdam.</p>
        </div>
      </div>

      <hr className='open-hr'/>

            <div className="on-top">

      <div className="product-summary-items" onClick={Opener4}>
        <div className="product-item-1">
     <div className="together-4"> <img src="/pngwing.com(4).png" alt="" width={'20px'} style={{marginRight:'15px'}}/>  <p>DELIVERY</p> </div>  

        </div>
        <div className={`open ${open4 ? 'rotate' : ''}`}>
          +
        </div>
      </div>
        <div  className={`product-summary-content ${open4 ? 'opened' : ''}`}>
          <p>Lorem ipsum dolor sit, amet consectetur 
            <br />
             Animi adipisci asperiores tempore quaerat, natus 
             <br />
              Distinctio iusto eius optio accusantium natus 
              <br />
              uos beatae ea vero, culpa odio saepe libero ratione 
              <br />
              llam eos nihil corporis quibusdam.</p>
        </div>
      </div>


      <hr className='open-hr'/>
            <div className="on-top">

      <div className="product-summary-items" onClick={Opener5}>
        <div className="product-item-1">
     <div className="together-4"> <img src="/pngwing.com(6).png" alt="" width={'15px'} style={{marginRight:'15px',transform:' rotate(181deg)'}}/>  <p>RETURNS AND EXCHANGE</p> </div>  

        </div>
        <div  className={`open ${open5 ? 'rotate' : ''}`}>
          +
        </div>
        
      </div>
      <div  className={`product-summary-content ${open5 ? 'opened' : ''}`}>
          <p>Lorem ipsum dolor sit, amet consectetur 
            <br />
             Animi adipisci asperiores tempore quaerat, natus 
             <br />
              Distinctio iusto eius optio accusantium natus 
              <br />
              uos beatae ea vero, culpa odio saepe libero ratione 
              <br />
              llam eos nihil corporis quibusdam.</p>
        </div>
<hr className='open-hr-4'/>

    </div>
  </div>
  </div>
  </div>
     </div>
     </div>
     </div>
     </div>
     </>

            </div>
  
            </div>
            <div className="related-products">
  <h1>RELATED PRODUCTS</h1>
</div>
<div className="related-products">
<div className="banner-product-2">

<div className="banner">
{instock
          .map((product) => (

            
            <div key={product.id} >
              <img onClick={function(){handleImageClick(product)}}
                src={product.img}
                alt={product.name}
                style={{ cursor: 'pointer' }}
              />
              <div className="plus-icon">
            <span onClick={function(){
              setActive(product.id)
toggleOnFront()
toggleSidebar3()

            }}>+</span>
          </div>
          {
            product.id===activeNote&& onFront?
<>
<div className="overlay"></div>
          <div className="on-front-element">
            <div className="pop-up-5">
              <div className="remove-button-2">

              <button className="remove-3" onClick={function(){
            toggleOnFront()
            toggleSidebar3()
          }}>X</button>
              </div>
          

      <>
      <div className="item-details-5">
     <div className="cart-image-5">
        <img src={product.img} alt=""  />

     </div>
     <div className="cart-details-5">
  <p  className="p-1-5">{product.clothtype}</p>

<h5 className="p-2-5">{product.name}</h5>
<p className="p-3-5" style={{marginTop: '37px',
  marginBottom: '38px'}}>{product.pricelogo} {product.price}  {product.priceunit}</p>
<hr />

<p style={{fontSize:'17px' ,}}>COLOR: <span>MAROON</span></p>


<div className="quantity-checker-2"><button onClick={SetQuantity2} className='down-sign'>_</button><p className='quantity-1' style={{marginBottom:' 0px'}}>{quantitySelector}</p> <button onClick={SetQuantity}>+</button></div>

<div className="quantity-checker">
  <div className="add-minus-2-5" style={{margin:' 32px 0'}}>
    <button className='add-button-3-5' onClick={function(){addToCart(product,selectedSizes[product.id],TypeSelection[product.id])}}>ADD TO CART</button>
    <button className='add-button-5'>BUY NOW</button>
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
              <p style={{ fontSize: '12px', color: 'black' }} className='middle'>
                {product.name}
              </p>
              <p className='middle' style={{ fontWeight: 'bold' }}>
         {product.pricelogo} {product.price}  {product.priceunit}
              </p>
              <p className='middle'>{product.clothtype}</p>

            </div>
          ))}
          
        </div>
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
  

  

</>

    )

}

export default ShaalProductDetails