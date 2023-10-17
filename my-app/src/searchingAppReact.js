import  { useState } from 'react';
import './App.css';
// import './Akoo.js'
// import TicTacToe from './Akoo.js';
let products = [
  {
    Movienamee: 'ABDULLAH',
    images: 'mercedes-amg-c63-coupe-1.jpg'
  },
  {
    Movienamee: 'hashir',
    images: '19678.jpg'
  },
  ,
  {
    Movienamee: 'hashir',
    images: '19678.jpg'
  }
  ,
  {
    Movienamee: 'hashir',
    images: 'mercedes-amg-c63-coupe-1.jpg'
  }
  ,
  {
    Movienamee: 'hashir',
    images: 'mercedes-amg-c63-coupe-1.jpg'
  }
  ,
  {
    Movienamee: 'hashir',
    images: 'mercedes-amg-c63-coupe-1.jpg'
  }
];

function DynamicApp() {
  const [show, setShow] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  function handleSearch() {
    const filtered = products.filter((pp) =>
      pp.Movienamee.toLowerCase().includes(show.toLowerCase())||
    pp.images.toLowerCase().includes(show.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  function clearSearch() {
    setShow('');
    setFilteredProducts(products); // Reset the filtered list to show all items
  }

  return (
    <>

      <div className="good">
        <input
          type="text"
          name=""
          id=""
          className="inp"
          value={show}
          onChange={(e) => setShow(e.target.value)}
        />
              <img src="merce.PNG" alt=""  />

        <button onClick={handleSearch}>Search</button>
        <button onClick={clearSearch}>Clear</button> {/* Add a Clear button */}
      </div>
      <div className="alll">
        {filteredProducts.map(function (pp, index) {
          return (
            <div className="cards" key={index}>
              <img src={pp.images} alt=""  />
              <div className="p">
                <p>{pp.Movienamee}</p>
              </div>
            </div>
          );
        })}

      </div>
    </>
  );
}

export default DynamicApp;
