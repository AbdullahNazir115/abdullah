
import { useState,useRef,useEffect,useContext } from 'react';
import './allStyling.css'
function Learning1(prop) {



    let [ch ,change]=useState(true)
    function i(){
      change(function(o){
    return !o
      })
    }
    
    let [tok,toker]=useState(true)
       
       let [add,todo]=useState(() => JSON.parse( localStorage.getItem('div'))|| [])
    
     function addd(){
    
      todo(function(o){
     localStorage.setItem('div',JSON.stringify(add))
    
        return [...o,{id:o.length+1,bgColor:'blue',text:'unset',show:true,content:'',input:''}];
      })
     }
     localStorage.setItem('div',JSON.stringify(add))
    // localStorage.clear('div')
     function toggleBackgroundColor(id) {
     localStorage.setItem('div',JSON.stringify(add))
    
      todo(prevDivs =>
        prevDivs.map(div =>
          div.id === id
            ? { ...div, bgColor: div.bgColor === 'blue' ? 'purple' : 'blue' }
            : div
        )
      );
    }
    
    function toj(id){
      todo(function(o){
        return o.map(function(od){
          if(od.id===id){
            return {...od,show: !od.show}
        }
        return od
        }
    )
      })
    }
    
    function toggleBackgroundColor2(id) {
      todo(prevDivs =>
        prevDivs.map(div =>
          div.id === id
            ? { ...div, text: div.text === 'unset' ? 'italic' : 'unset' }
            : div
        )
      );
    }
    
    
    const [activeNote, setActiveNote] = useState(null);
    
    // Function to set the active note
    function setActive(id) {
      setActiveNote(id);
      // Move the active note to the top of the array
      
    }
    
    function set(id){
      todo((prevNotes) => {
        const activeIndex = prevNotes.findIndex((note) => note.id === id);
        if (activeIndex !== -1) {
          const updatedNotes = [...prevNotes];
          const [activeNote] = updatedNotes.splice(activeIndex, 1);
          updatedNotes.unshift(activeNote);
          return updatedNotes;
        }
        return prevNotes;
      });
    }
    
    function updateNoteContent(id, content) {
      todo((prevNotes) =>
        prevNotes.map((note) =>
          note.id === id
            ? {
                ...note,
                content: content,
              }
            : note
        )
      );
      set(id);
    
    }
    
    function updateNoteinput(id, input) {
      todo((prevNotes) =>
        prevNotes.map((note) =>
          note.id === id
            ? {
                ...note,
                input: input,
              }
            : note
        )
      );
    }
    function tg(id) {
      todo((o) => {
        return o.filter((a) => a.id !== id);
      });
    }
    
    
    function ig(){
      toker(function(o){
        return !o
      })
      }
      
    return(
      <>
      <div className="ip">
        <h1 style={{textAlign:'center'}}>add a new note</h1>
    <div className="move" style={{display:'flex' ,justifyContent:'center' ,alignItems:'center' ,transform: add.length===0?'':'translateX(-600px)',margin:'20px 0'}}>
    <button onClick={addd} >+</button>
    </div>
    </div>
    {add.length===0  &&<h1 style={{textAlign:'center'}}>you have 0 notes</h1>}
    
    <div>
    {add.map(function (div, index) {
      return (
        <div key={div.id} className="ko">
    
          <div className="card"  onClick={() => setActive(div.id)} style={{background:div.id === activeNote ?'red ' :''}}>
    
         {   <input type="text" style={{visibility:div.show? 'visible' :'hidden'}} onInput={function(e) {return updateNoteinput(div.id,e.currentTarget.value)}}/> }
    
           <p style={{color:'black',transform: 'translateY(-14px)'}}>{div.input}</p> <button onClick={function(){
           return tg(div.id)
           }}>delete</button>
    
    
    {div.input!=='' ? <button onClick={function(){toj(div.id)}} style={{width:div.show?'50px' :'100px'}}>{div.show ?'ok' :'changeName'}</button>:''}
    
          </div>
          
        
          {div.id === activeNote   ? (
            
            <>
            <div className="dad" >
            
    
              <button onClick={() => toggleBackgroundColor2(div.id)} className='same'>Italic</button>
    
              <div
                contentEditable
                onInput={function(e){ return updateNoteContent(div.id,e.currentTarget.textContent)}}
                style={{
                  margin: '104px 0',
                  backgroundColor: 'white',
                  fontStyle: div.text,
                  whiteSpace: 'pre-wrap',
                }}
                
             className='content-editable' ><div> {div.content}</div></div>
    
              </div>
            </>
          ) : (
            ''
          )
          
          }
        </div>
      );
    })}
    </div>
    
    </>
    )
    }
    
    
    export default Learning1;
     {/* <body style={{background:dark ?'white':'black'}}>
<button onClick={toggle}>change</button>
{ a&&<Show/>}
 <p style={{color:dark ?'black': '#ccc'}}>light</p><button onClick={ui} style={{
  background:dark ?'black':'white'
}}><span style={{
 

}}><span  id='rt' style={{transform: dark ?'translateX(8px)' :'translateX(39px)' ,background:dark ? 'white' :'black'}}></span></span></button><p style={{color:dark ?'#ccc': 'white'}}>dark</p>
</body> */}


{/* <> */}


// let [a,b]=useState(true)

// function toggle(){
//   b(function(o){
// return !o
//   })
// }

// let [dark,darkmode]=useState(prop.darkmode)
// function ui(){
// darkmode(function(o){
// return !o
// })
// }


// function Show(){
//   let [c,d]=useState(window.innerWidth)
//   function er(){
//     d(window.innerWidth)
//         }
//   useEffect(function(){
      
    
//         window.addEventListener('resize',er)

// return function(){
//         window.removeEventListener('resize',er)

//         }
//       },[])


// return(

// <h1>window.length    {c}</h1>
// )
// }



{/* <button onClick={tog}>{togg ?'open':'close'}</button>
 
 <p>{togg2.length>0 ?`you have ${togg2.length} unread message${togg2.length>1? 's' : '' }` :`you are all caught up `}</p>
 
 </> */}

// let [togg,toggle]=useState(false)
// let [togg2,toggle2]=useState(['a'])
 
// function tog(){
//   toggle(function(i){
// return !i
//   })
//   console.log(togg)
// }


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

// let [form,formData]=useState({name:'',pass1:'',pass2:'',sign:false})
// let b
// function change(event){
//   formData(function(i){
   

// return {...i,[event.target.name]:event.target.type==='checkbox'?event.target.checked : event.target.value}

//   })
// }

// return(
// <>
// <form action="">
// <input type="text" name="name" id="" onChange={change} placeholder='email'/>
// <input type="password" name="pass1" id="" onChange={change} placeholder='pass'/>
// <input type="password" name="pass2" id="" onChange={change} placeholder='confirm'/>
// <input type="checkbox" name="sign" id="l" value={form.sign}  onChange={change}/>
// <label htmlFor="l" >sign up</label>
// <p>{form.sign?'thanks for signing up':''}</p>
// <p>{form.pass1===form.pass2 && form.pass1!=''&& form.pass1!='' ?'success' :'both pass should match'}</p>
// <button disabled={!(form.pass1 === form.pass2 && form.pass1 !== '' && form.pass2 !== '')}>submit</button>
// </form>
// </>
// )
