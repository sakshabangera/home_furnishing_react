import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Registration from './customer/Registration';
import Login from './customer/Login';
import Home from './component/Home';
import Product from './customer/Product';
import Category from './customer/Category';
import ProductDetails from './customer/ProductDetails';
import Cart from './customer/Cart';
import { Orders } from './customer/Orders';
import { Checkout } from './customer/Checkout';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './customer/Dasboard';

function App() {
  const isUserLoggedIn= useSelector(state => state.auth.user)
  const navigate= useNavigate()
  //console.log(isUserLoggedIn)

  useEffect(() => {
    if(isUserLoggedIn){
      navigate('/')
    }
    else{
      navigate('/dashboard')
    }
  },[isUserLoggedIn])
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
      <Route  path='/dashboard' element={<Dashboard/>} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/" element={<Category/>} />
        <Route  path='/:categoryName' element={<Product/>} />
        <Route  path='/:categoryName/:productId' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      
      </div>
  );
}

export default App;