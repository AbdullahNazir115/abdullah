
import BarouqeProject from "./App";
import  { createContext, useState ,useEffect} from 'react';
// import React from 'react';
import CartContext from './CartContext'; // Import CartContext
import { json } from "react-router-dom";
import Unstiched from "./Unstiched";

export let UnstichedProducts = [
  {
    img: '/product-cover-image-1.png',
    name: 'EMBROIDERED CHIFFON UF-297',
    id: '1',
    price: '3,500.00',
    type: 'UNSTICHED ',
    clothtype:'UNSTICHE',
    stock: true,
        pricee: '3,500.00',

    lineImage1:'/product-cover-image-1.png',
    lineImage2:'/product-1-inner-image-1.png',
        lineImage3:'/product-1-inner-image-2.png',    
        lineImage4:'/product-1-inner-image-3.png',    
        lineImage5:'/product-1-inner-image-4.png',   
size:'XS',    
priceunit:'PKR',
pricelogo:'',

  },
  {
    img: '/product-2-inner-image-1.png',
    name: 'EMBROIDERED CHIFFON UF-291',
    id: '2',
    price: '5,500.00',
    type: 'UNSTICHED ',
    clothtype:'UNSTICHE',
    stock: true,
        pricee: '5,500.00',

    lineImage1:'/product-2-inner-image-1.png',
    lineImage2:'/line-2-img-6.png',
        lineImage3:'/line-2-img-2.png',    
        lineImage4:'/line-2-img-3.png',    
        lineImage5:'/line-2-img-4.png',   
size:'XS'  ,  
priceunit:'PKR',
pricelogo:'',


  },
  {
    img: '/product-3-inner-image-1.png',
    name: 'EMBROIDERED NET UF-383',
    id: '3',
    price: '10,500.00',
    type: 'UNSTICHED ',
    clothtype:'UNSTICHE',
    stock: false,
        pricee: '10,500.00',

    lineImage1:'/product-3-inner-image-1.png',
    lineImage2:'/product-3-inner-image-2.png',
        lineImage3:'/product-3-inner-image-3.png',    
        lineImage4:'/product-3-inner-image-4.png',    
        lineImage5:'/product-3-inner-image-5.png',   
    
size:'XS'  ,
priceunit:'PKR',
pricelogo:'',


    
  },

 
]


export let shaal=[
  {
    img: '/shaal-cover-image-1.png',
    name: 'EMBROIDERED VELVET SHAWL ',
    id: '1',
    price: ' 18,990.00',
    type: 'UNSTICHED ',
    clothtype:'SHAWL',
    stock: false,
        pricee: ' 18,990.00',

    lineImage1:'/shaal-cover-image-1.png',
    lineImage2:'/shaal-cover-image-line-2.png',
        lineImage3:'/shaal-cover-image-line-3.png',     
        lineImage4:'/shaal-cover-image-line-4.png',    
        
        priceunit:'PKR',
        pricelogo:'',
        
    
  },
  {
    img: '/shaal-cover-image-2-line-1.png',
    name: 'EMBROIDERED VELVET SHAWL VS-44 ',
    id: '2',
    price: '19,990.00',
    type: 'UNSTICHED ',
    clothtype:'SHAWL',
    stock: true,
        pricee: '19,990.00',

    lineImage1:'/shaal-cover-image-2-line-1.png',
    lineImage2:'/shaal-cover-image-2-line-2.png',
        lineImage3:'/shaal-cover-image-2-line-3.png',    
        lineImage4:'/shaal-cover-image-2-line-4.png',    
    
        priceunit:'PKR',
        pricelogo:'',
        
    
  },
  {
    img: '/shaal-cover-image-3-line-1.png',
    name: 'EMBROIDERED VELVET SHAWL VS-34 ',
    id: '3',
    price: '19,990.00',
    type: 'UNSTICHED ',
    clothtype:'SHAWL',
    stock: true,
        pricee: '19,990.00',

    lineImage1:'/shaal-cover-image-3-line-1.png',
    lineImage2:'/shaal-cover-image-3-line-2.png',
        lineImage3:'/shaal-cover-image-3-line-3.png',    
        lineImage4:'/shaal-cover-image-3-line-4.png',    
        priceunit:'PKR',
        pricelogo:'',
        
    
    
  },

]

export let chantelle=[
  {
    img: '/chantelle-cover-image-1-line-1.png',
    name: 'EMBROIDERED CHIFFON CH11-01 ',
    id: '1',
    price: '18,000.00',
    type: 'UNSTICHED',
    clothtype:'CHANTELLE',
    stock: true,
        pricee: '18,000.00',

    lineImage1:'/chantelle-cover-image-1-line-1.png',
    lineImage2:'/chantelle-cover-image-1-line-2.png',
        lineImage3:'/chantelle-cover-image-1-line-3.png',     
        lineImage4:'/chantelle-cover-image-1-line-4.png',    
        lineImage5:'/chantelle-cover-image-1-line-5.png',   
        size:'XS',
        priceunit:'PKR',
        pricelogo:'',
        
    
    
  } ,{
    img: '/chantelle-cover-image-2-line-1.png',
    name: 'EMBROIDERED CHIFFON CH11-04 ',
    id: '2',
    price: '13,000.00',
    type: 'UNSTICHED',
    clothtype:'CHANTELLE',
    stock: false,
        pricee: '13,000.00',

    lineImage1:'/chantelle-cover-image-2-line-1.png',
    lineImage2:'/chantelle-cover-image-2-line-2.png',
        lineImage3:'/chantelle-cover-image-2-line-3.png',     
        lineImage4:'/chantelle-cover-image-2-line-4.png',    
        lineImage5:'/chantelle-cover-image-2-line-5.png',   
        size:'XS',
    
        priceunit:'PKR',
        pricelogo:'',
        
    
  },
  {
    img: '/chantelle-cover-image-3-line-1.png',
    name: 'EMBROIDERED CHIFFON CH11-02 ',
    id: '3',
    price: '19,000.00',
    type: 'UNSTICHED',
    clothtype:'CHANTELLE',
    stock: false,
        pricee: '19,000.00',

    lineImage1:'/chantelle-cover-image-3-line-1.png',
    lineImage2:'/chantelle-cover-image-3-line-2.png',
        lineImage3:'/chantelle-cover-image-3-line-3.png',     
        lineImage4:'/chantelle-cover-image-3-line-4.png',    
        lineImage5:'/chantelle-cover-image-3-line-5.png',   
        size:'XS',
        priceunit:'PKR',
        pricelogo:'',
            
    
  },
]


function CartProvider({ children,addToCart,decreaseFromcart}) {



  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem('CART')) || []
  );
  const [instock, instocker] = useState(
    () => JSON.parse(localStorage.getItem('product')) || UnstichedProducts
  );

  const [instock2, instocker2] = useState(
    () => JSON.parse(localStorage.getItem('product2')) || shaal
  );

  const [instock3, instocker3] = useState(
    () => JSON.parse(localStorage.getItem('product3')) || chantelle
  );

  
    useEffect(() => {
      // Update localStorage with the updated cart state whenever it changes
      localStorage.setItem('CART', JSON.stringify(cart));
    }, [cart]);
  
    let[quantitySelector,SetquantitySelector]=useState(1)
    function SetQuantity(){
      SetquantitySelector(function(o){
    
    return o>=1? o+1:''
      })
    }
    
    function SetQuantity2(){
      SetquantitySelector(function(o){
    return o>1?o-1:1
      })
    }
    let [Find, Finder] = useState(''); // State for the minimum price input
    let [FindShow, setFindShow] = useState([]); // State for the minimum price input

let Setfilter=[UnstichedProducts,chantelle,shaal]



const Filter = () => {
 let startSearchin= UnstichedProducts.filter(function(product){
   return   product.name.toLocaleLowerCase().includes(Find)
    })

    const filteredChantelleProducts = chantelle.filter(function (product) {
      return product.name.toLowerCase().includes(Find.toLowerCase());
    });
  
    const filteredShaalProducts = shaal.filter(function (product) {
      return product.name.toLowerCase().includes(Find.toLowerCase());
    });
    setFindShow([...startSearchin, ...filteredChantelleProducts, ...filteredShaalProducts]);

}
useEffect(() => {
  Filter();
}, [Find, UnstichedProducts, chantelle, shaal]);
  // Function to add items to the cart
  let[unit,unitChanger]=useState()
  

  function ChangePrice(unit,type,logo) {
    const updatedUnstichedProducts = UnstichedProducts.map((product) => ({
      ...product,
      price: (parseFloat(product.price.replace(/,/g, '')) /unit).toFixed(2),priceunit:type,pricelogo:logo
    }));
  
    const updatedUnstichedProducts2 = shaal.map((product) => ({
      ...product,
      price: (parseFloat(product.price.replace(/,/g, '')) /unit).toFixed(2),priceunit:type,pricelogo:logo
    }));
  
    const updatedUnstichedProducts3 = chantelle.map((product) => ({
      ...product,
      price: (parseFloat(product.price.replace(/,/g, '')) /unit).toFixed(2),priceunit:type,pricelogo:logo
    }));
    const updatedUnstichedProducts4 = cart.map((product) => (
      
      {
      
      ...product,
      price: (parseFloat(product.pricee.replace(/,/g, '')) /unit).toFixed(2),priceunit:type,pricelogo:logo
    }));
    setCart(updatedUnstichedProducts4)
    instocker(updatedUnstichedProducts);
    instocker2(updatedUnstichedProducts2);
    instocker3(updatedUnstichedProducts3);
    unitChanger(updatedUnstichedProducts)
    localStorage.setItem('CART', JSON.stringify(updatedUnstichedProducts4));

    localStorage.setItem('product',JSON.stringify(updatedUnstichedProducts))
localStorage.setItem('product2',JSON.stringify(updatedUnstichedProducts2))
localStorage.setItem('product3',JSON.stringify(updatedUnstichedProducts3))

  }
  

// function PriceLogoChanger(type,logo){
// let changer=UnstichedProducts.map(function(o){
// return {...o,priceunit:type,pricelogo:logo}
// })
// let changer2=UnstichedProducts.map(function(o){
//   return {...o,priceunit:type,pricelogo:logo}
//   })
//   let changer3=UnstichedProducts.map(function(o){
//     return {...o,priceunit:type,pricelogo:logo}
//     })

//     instocker(changer);
//     instocker2(changer2);
//     instocker3(changer3);


//     localStorage.setItem('product',JSON.stringify(changer))
//     localStorage.setItem('product2',JSON.stringify(changer2))
//     localStorage.setItem('product3',JSON.stringify(changer3))
    
// }
  
  function addToCart(product, size,type) {
    // Check if an item with the same product ID and size is already in the cart
    
    const existingItem = cart.find((item) => item.id === product.id && item.size === size&&item.type===type);
  
    if (existingItem) {
      // If the item with the same product ID and size is in the cart, update the quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === existingItem.id&&item.size === size&&item.type===type ? { ...item, quantity: item.quantity + quantitySelector } : item
        )
      );
    }
    else {
      // If the product is not in the cart, add it as a new item
      setCart((prevCart) => [
        ...prevCart,
        { ...product, quantity: quantitySelector, size: size,type:type }
      ]);
    }
  
    // Update localStorage with the updated cart state
    localStorage.setItem('CART', JSON.stringify(cart));
  }



  function addToCart2(product,size,type ) {
    // Check if an item with the same product ID and size is already in the cart
    
    const existingItem = cart.find((item) => item.id === product.id&&item.size===size &&item.type===type);
  
    if (existingItem) {
      // If the item with the same product ID and size is in the cart, update the quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === existingItem.id &&item.size===size&&item.type===type? { ...item, quantity: item.quantity + 1 } : item
        )
      );
   
    }
  
    // Update localStorage with the updated cart state
    localStorage.setItem('CART', JSON.stringify(cart));
  }

  
  function decreaseFromcart(product,size,type) {
    const existingProduct = cart.find((item) => item.id === product.id&& item.size === size&&item.type===type);
  
    if (existingProduct) {
    if (existingProduct.quantity>1) {
      
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id&&item.size === size&&item.type===type &&item.quantity>0
            ? { ...item, quantity: item.quantity - 1 }
           : item
        )
      );
    }
    else {
      // If the quantity is 1 or less, remove the product from the cart
      setCart((prevCart) =>
        prevCart.filter((item) => item.size !== product.size&&item.type!==type)
      );}
    }

}

function decreaseFromcart2(product,size,type) {
  const existingProduct = cart.find((item) => item.id === product.id&&item.size===size&&item.type===type);

  if (existingProduct) {
  if (existingProduct.quantity>1) {
    
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id &&item.quantity>0&&item.size===size&&item.type===type
          ? { ...item, quantity: item.quantity - 1 }
         : item
      )
    );
  }
  else {
    // If the quantity is 1 or less, remove the product from the cart
    setCart((prevCart) =>
      prevCart.filter((item) => item.size !== product.size&&item.type!==type)
    );}
  }

}

function removeFromcart(product, size, type) {
  setCart((prevCart) =>
    prevCart.filter((item) => !(item.id === product.id && item.size === size && item.type === type))
  );
}

  return (
  
  
  <>

<CartContext.Provider value={{cart,instock,instocker,setCart,addToCart,decreaseFromcart,removeFromcart,addToCart2,decreaseFromcart2 ,quantitySelector,SetQuantity,SetQuantity2,instock2,instocker2,instock3,instocker3,Find,Finder,Filter,FindShow, setFindShow,Setfilter,ChangePrice,unit,unitChanger}}>
      {children}
    </CartContext.Provider>

  </>
  );
}


export { CartProvider};