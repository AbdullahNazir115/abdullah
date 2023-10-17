import { useLocation } from 'react-router-dom';

function ProductDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedProductImg = queryParams.get('img');
  const selectedProductName = queryParams.get('name');

  return (
    <>
      <p style={{ color: 'black' }}>Product Details</p>
      <div className="banner">
        <img src={selectedProductImg} alt={selectedProductName} />
        <h1>{selectedProductName}</h1>
      </div>
      <img src="Unstiched-1.png" alt="" />
    </>
  );
}

export default ProductDetails;
