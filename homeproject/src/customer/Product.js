import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productSlice';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Product = () => {
  const products = useSelector(state => state.products.products);
  const isLoggedIn= useSelector(state => state.auth.user);
  // const { categoryName } = useParams();
  // const location = useLocation();
  // const categoryName = location.state ? location.state.categoryName : null; 
  const dispatch = useDispatch();
  const params= useParams()
  const categoryName= params['categoryName']
  console.log(categoryName);

  useEffect(() => {
    dispatch(fetchProducts(categoryName));
  }, [categoryName, dispatch]);

  // Filter products based on category id
  // const filteredProducts = products.filter(product => product.category === categoryid);

  return (
    <div className="container">
      <h2 className="text-center my-4">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 text-center">
              <img src="furniture/sofa.jpg" className="card-img-top" alt={product.name} style={{height: '250px', objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title mb-3">{product.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
                <p className="card-text">{product.description}</p>
                <Link to={`/${categoryName}/${product.id}`}>
                <a href="#" className="btn btn-outline-dark">View Details</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
