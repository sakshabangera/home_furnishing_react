import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from './categorySlice';
import { Link } from 'react-router-dom';
import Header from '../component/Header';

const Category = () => {
  
  const category = useSelector(state => state.category.category);
  const isLoggedIn= useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <>
    <Header/>
    <div className="container">
      <h2 className="text-center my-4">Categories</h2>
      <div className="row">
        {category.map((category) => (
          <div className="col-md-3 mb-4" key={category.id}>
            <div className="card h-100 text-center">
              <img src="furniture/sofa.jpg" className="card-img-top" alt={category.type} style={{height: '250px', objectFit: 'cover'}} /> 
              <div className="card-body">
                <h5 className="card-title mb-3">{category.type}</h5>
                <Link key={category.id} to={`/${category.type}`
                }>
                  <button className="btn btn-outline-dark">View Products</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Category;
