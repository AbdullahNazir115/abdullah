export default [
    
    {
        state:'ON',
        on:true
    }

    ,
    {
        state:'ON',
        on:true
    }

    ,
    {
        state:'ON',
        on:false
    }

    ,
    {
        state:'ON',
        on:true
    }


    ,
    {
        state:'ON',
        on:false
    }
 ]


//  let [turn,turner]=useState(offf)

//   function toggle(index){
//   turner(function(i){
//     return i.map(function(lo,i){
//     if (i === index) {

//       return {...lo,on: !lo.on}
//     }
//     return lo

//     })

//   })

//   }

//   let change=turn.map(function(o,index){
//     return (
//       <p className='box' onClick={function(){
//         toggle(index)
//       }}>{o.on ? 'ON' : 'OFF' }</p>
//     )
//        })




       
//  function Learning() { 
//   let [meme, memer] = useState({
//     randimg:''
//   });

//   let [showw, shower] = useState('');
//   let [jk, jkoo] = useState('');
//   let [jk1, jkoo2] = useState('');
//   let [out, outer] = useState(true);

//   let gh = data.map(function(item) {
//     return item.img;
//   });

//   function generate() {
//     let randomIndex = Math.floor(Math.random() * gh.length);
//     let randomImage = gh[randomIndex];
//     memer(function(o){
//       return({
//         ...o,
//         randimg:randomImage
//       })
//     })
    
//     jkoo('');
//     jkoo2('');
//   }

// function change(){
//   outer(function(out){
    
//  return !out
//   })
// }


//   function ui(e) {
//     jkoo(e.target.value);
//   }

//   function ui2(e) {
//     jkoo2(e.target.value);
//   }

//   return (
//     <>
//       <div className="meme">
//         <div className="in" style={{ margin: '20px 0' }}>
//           <input type="text" name="" id="inputt" value={jk} onInput={ui} />
//           <input type="text" name="" id="" value={jk1} onInput={ui2} />
//         </div>
//         <br />
//         <br />
//         <br />
//         <br />

//         <button style={{ width: '200px', margin: '50px 0' }} onClick={generate}>
//           GENERATE A NEW MEME
//         </button>
//         <div className="e">
//           <div className="soldd1">{jk}</div>
//           <div className="soldd2">{jk1}</div>

//           <img src={meme.ra} alt="" width={'250px'} />

//           <button onClick={change}>g</button>
//           <p>{out ? 'yes' :'no'}</p>
//         </div>
//       </div>
//     </>
//   );
// }
// function lol(){

//   let [go,goes]=useState(0)

//   function inc(){
//     goes(function(o){
//   return o+1
//     })
//   }
  
//   function dnc(){
//     goes(function(o){
//   return o-1
//     })
//   }
  
  
// return(
// <>
// <button onClick={inc}>+</button>
// <Prop  number={go}/>
// <button onClick={dnc}>-</button>

// </>
// )
// }

// let [turn,turner]=useState(offf)

//   function toggle(index){
//   turner(function(i){
//     return i.map(function(lo,i){
//     if (i === index) {

//       return {...lo,on: !lo.on}
//     }
//     return lo

//     })

//   })

//   }

//   let change=turn.map(function(o,index){
//     return (
//       <p className='box' onClick={function(){
//         toggle(index)
//       }}>{o.on ? 'ON' : 'OFF' }</p>
//     )
//        })