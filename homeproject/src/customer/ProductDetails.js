import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchProducts } from './productSlice';
import { addToCart } from './cartSlice';

const ProductDetails = () => {
  const products = useSelector(state => state.products.products);
  const isLoggedIn= useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const { categoryName, productId } = useParams();


  useEffect(() => {
    dispatch(fetchProducts(categoryName));
  }, [categoryName, dispatch]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  // Find the specific product from the products array
  const product = products.find(product => product.id === Number(productId));

  if (!product) {
    return <div className="d-flex justify-content-center"><div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div></div>;
  }

  // Parse the options and rental options
//   const options = JSON.parse(product.options);
//   const rentalOptions = JSON.parse(product.rentaloptions);
  console.log(product.options);
  console.log(product.rentaloptions);

  return (
//     <div className="card mb-3" style={{maxWidth: '540px'}}>
//   <div className="row g-0">
//     <div className="col-md-4">
//       <img src="furniture/sofa.jpg" className="img-fluid rounded-start" alt={product.name}/>
//     </div>
//     <div className="col-md-8">
//       <div className="card-body">
//         <h5 className="card-title">{product.name}</h5>
//         <p className="card-text">{product.description}</p>
//         <h6 className="card-subtitle mb-2 text-muted">Category: {product.category}</h6>
//         <h6 className="card-subtitle mb-2 text-muted">Condition: {product.condition}</h6>
//         <h6><p className="card-subtitle mb-2 text-muted">Description: {product.description}</p></h6>
//         <h6 className="card-subtitle mb-2 text-muted">Noof Days: {product.noofdays}</h6>
//         <h6 className="card-subtitle mb-2 text-muted">Size: {product.options.size}</h6>
//         <h6 className="card-subtitle mb-2 text-muted">Color: {product.options.color}</h6>
//         {product.rentaloptions.map((option, index) => (
//           <div key={index}><h4>Rental Options:</h4>
//             <h6 className="card-subtitle mb-2 text-muted">Tenure: {option.tenure} months</h6>
//             <h6 className="card-subtitle mb-2 text-muted">Rate per month: {option.ratepermonth}</h6>
//           </div>
//         ))}
//         <Link to={'/cart'}>
//         <button className="btn btn-dark" onClick={handleAddToCart}>Add to cart</button>
//         </Link>
//         <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//   </div>
// </div>

    <div className="container mt-5">
      <h2 className="text-center mb-4">{product.name}</h2>
      <div className="row">
        <div className="col-md-6">
          {/* <img src="furniture/sofa.jpg" className="img-fluid rounded" />  */}
          <img src="furniture/sofa1.jpg" className="img-fluid rounded" alt={product.name} style={{height: '250px', objectFit: 'cover'}} />

        </div>
        <div className="col-md-6">
          <h5 className="card-title mb-3">{product.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Category: {product.category}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Condition: {product.condition}</h6>
          <h6><p className="card-subtitle mb-2 text-muted">Description: {product.description}</p></h6>
          <h6 className="card-subtitle mb-2 text-muted">Noof Days: {product.noofdays}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Size: {product.options.size}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Color: {product.options.color}</h6>
          {product.rentaloptions.map((option, index) => (
            <div key={index}><h4>Rental Options:</h4>
              <h6 className="card-subtitle mb-2 text-muted">Tenure: {option.tenure} months</h6>
              <h6 className="card-subtitle mb-2 text-muted">Rate per month: {option.ratepermonth}</h6>
            </div>
          ))}
          <Link to={'/cart'}>
          <button className="btn btn-dark" onClick={handleAddToCart}>Add to cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;