
import { useEffect, useState } from 'react'

function Box(prope){

    const styles = {
        backgroundColor: prope.cond ? "orange" : "blue"
    }
      return(
      <div className='box' key={prope.id} style={
        styles
      }
       onClick={function()
        {
            return prope.toggle(prope.id)
        }
    }
>{prope.name}</div>
      )
            }
  export default Box    




//   let [show,shower]=useState( {
//     name:'abdulah',
//     // age: '19',
//     class: 7,
//     isFav:true
//   } 
//   )

//   function Handle(){
//     shower(function(o){

//       return({...o,

//         isFav:!o.isFav

        
//       }


//       )

//     })
//   }


//   function Filled(prop){

//     let starIcon=prop.isFilled ? 'Mercedes-C63s-AMG-sedan-6.jpeg' :'Mercedes_c63_amg_w204_red_1.jpg'
  
//       return(
//     <img src={starIcon} alt="" width={'200px'}   onClick={Handle}/> 
//       )
//       }

     
//       let [lo,lon]=useState(props.darkmode)
// let [box,showBox]=useState(neww)

// function hand(){
//   lon(function (o){
// return !o
//   })
// }


// function toggle(id){

//   showBox(function(o){
// return box.map(function(p){
// return p.id===id ? {...p,cond:!p.cond} : p
// })
//   })
// }


// // function flip(prope){
// //   return  !prope.cond
// //   }

 


// let shoo=box.map(function(item){

// return(
// <Box key={item.id}  cond={item.cond} toggle={toggle} id={item.id}/>  


// )
// })



{/* <div style={{
    background:lo ? 'white':'black'
  }}>
  <button onClick={hand}>Dark mode</button>
  <Filled  isFilled={show.isFav}  />
  <div className='box2'>{shoo}</div>
</div> */}