import { useState } from "react";
import { Link } from 'react-router-dom'; // Remove BrowserRouter as Router

import './allStyling.css'

import neww from './boxes'

function Learning1() {
  let [show, shower] = useState({
    name: 'abdulah',
    class: 7,
    isFav: true,
  });

  function Handle() {
    shower(function (o) {
      return {
        ...o,
        isFav: !o.isFav,
      };
    });
  }

  function Filled(prop) {
    let starIcon = prop.isFilled ? 'Mercedes-C63s-AMG-sedan-6.jpeg' : 'Mercedes_c63_amg_w204_red_1.jpg';

    return (
      <img src={starIcon} alt="" width={'200px'} onClick={Handle} />
    );
  }

  let [lo, lon] = useState();
  let [box, showBox] = useState(neww);

  let shoo = box.map(function (item) {
    return (
      <div key={item.name}> {/* Add key */}
        <div className='box'>{item.name}</div>
      </div>
    );
  });

  return (
    <> {/* No need for Router here */}
      <Filled isFilled={show.isFav} />
      <button>Add item</button>
      <div className='striaght'>{show.name}</div>
      <div className='box2'>{shoo}</div>
      <Link to="/nextPage">Go to next page</Link>
    </>
  );
}

export default Learning1;
