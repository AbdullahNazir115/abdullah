import './allStyling.css'
import Header from './header'
import Body from './body'
import data from './new'
import neww from './boxes'
import Box from './box'
import { useState } from 'react'
import offf from './productsreact'



// function Learning1(){



// let [turn,turner]=useState(offf)

//   function toggle(index){
//   turner(function(i){
//     return i.map(function(lo,i){
//       if(i===index){
//       return {...lo,on: !lo.on}
//       }
//       return lo;
//     })
//   })
//   }

//   let change=turn.map(function(o){
//     return (
//       <p className='box' onClick={toggle}>{o.on ? 'ON' : 'OFF' }</p>
//     )
//        })

// return(
//   <>

//  <div>{change}</div>
 
//   </>
// )

// }

// ... (other imports and code)

function Learning1() {
  let [turn, turner] = useState(offf);
  let [addedIndex, setAddedIndex] = useState();
  let [quantities, setQuantities] = useState(new Array(turn.length).fill(0));



  function toggle(index) {
    turner(function (currentState) {
      return currentState.map(function (lo, i) {
        if (i === index) {
          const updatedQuantities = [...quantities];
          updatedQuantities[index] = updatedQuantities[index] + 1;
          setQuantities(updatedQuantities);
          return { ...lo, on: !lo.on ,updatedQuantities};
        }
        return lo;
      });
    });
  
    // Show the "added" message for the clicked item
    setAddedIndex(index);
  
    // Hide the "added" message after 2 seconds
    setTimeout(() => {
      setAddedIndex(null);
    }, 2000);
    console.log(quantities)
  }
  

  let change = turn.map(function (o,index) {
    return (
      <>
      <div className="cards" >
    <div className="img">
<div className="img-2">

  <img src={o.image} alt="" width="260px" /> 
  </div>
    <div className="p">
        <p >{o.name}</p>
    </div>
    <div className="stars">

    <div className="stars2">

<span style={{fontSize:'200%',color:'red'}}  ></span>

<span style={{fontSize:'200%',color:'red'}}  ></span>

<span style={{fontSize:'200%',color:'red'}}  ></span>

<span style={{fontSize:'200%',color:'red'}}  ></span>

<span style={{fontSize:'200%',color:'red'}}  ></span>
</div>

        <p className='rate'></p>
    </div>
    <div className="price">
        <button className="plus add4">-</button>
        <p className='items'>1</p>

        <button className="adda plus">+</button>



    </div>
    <p className='price'> {o.price}</p>

    <div className="select">
        <select name="" className="selectt">
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
    </div>
</div>
<p className="show"  style={{display: addedIndex === index? 'block' : 'none'}}><img src='pngwing.com (34).png' alt='' width='20px' /> added</p>

<button className="add plus2" data-product-name={o.id} onClick={function(){
  return toggle(index)
}}>Add to Cart</button>

</div>
</>
    );
  });

  return (
    <>
     <div className="cart">
            <a href='checkout.html'style={{textDecoration: 'none'}} className="as">  

              <img src="pngwing.com (27).png" alt="" width={'100px'} />

              <span id="span">{quantities.reduce((total, q) => total + q, 0)}</span>

            </a>
        </div>
      <div className='daddy'>{change}</div>
    </>
  );
}

// ... (other components and code)


function Learning() {
  let [meme, memer] = useState({
    randimg:''
  });

  let [showw, shower] = useState('');
  let [jk, jkoo] = useState('');
  let [jk1, jkoo2] = useState('');
  let [out, outer] = useState(true);

  let gh = data.map(function(item) {
    return item.img;
  });

  function generate() {
    let randomIndex = Math.floor(Math.random() * gh.length);
    let randomImage = gh[randomIndex];
    memer(function(o){
      return({
        ...o,
        randimg:randomImage
      })
    })
    
    jkoo('');
    jkoo2('');
  }

function change(){
  outer(function(out){
    
 return !out
  })
}


  function ui(e) {
    jkoo(e.target.value);
  }

  function ui2(e) {
    jkoo2(e.target.value);
  }

  return (
    <>
      <div className="meme">
        <div className="in" style={{ margin: '20px 0' }}>
          <input type="text" name="" id="inputt" value={jk} onInput={ui} />
          <input type="text" name="" id="" value={jk1} onInput={ui2} />
        </div>
        <br />
        <br />
        <br />
        <br />

        <button style={{ width: '200px', margin: '50px 0' }} onClick={generate}>
          GENERATE A NEW MEME
        </button>
        <div className="e">
          <div className="soldd1">{jk}</div>
          <div className="soldd2">{jk1}</div>

          <img src={meme.ra} alt="" width={'250px'} />

          <button onClick={change}>g</button>
          <p>{out ? 'yes' :'no'}</p>
        </div>
      </div>
    </>
  );
}
function lol(){

  let [go,goes]=useState(0)

  function inc(){
    goes(function(o){
  return o+1
    })
  }
  
  function dnc(){
    goes(function(o){
  return o-1
    })
  }
  
  
return(
<>
<button onClick={inc}>+</button>
<Prop  number={go}/>
<button onClick={dnc}>-</button>

</>
)
}


export default Learning1;
