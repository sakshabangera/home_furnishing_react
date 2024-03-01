import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { login } from '../Store';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { loginform } from './actions';
import axios from 'axios';
import { loginUser } from './loginSlice';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Login=()=> {
  const [loginAttempt, setLoginAttempt] = useState(false)
  const isLoggedIn= useSelector(state => state.auth.user)
  const [userData, setUserData]= useState({
      username: '',
      password: '',
  })
  const navigate = useNavigate();
  const dispatch= useDispatch()
  
  const changeHandler= (e) => {
      setUserData({...userData, [e.target.name]: e.target.value});
  }

  const handleSubmit= (e) => {
    e.preventDefault()
    setLoginAttempt(true)
    dispatch(loginUser(userData))
  }

  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  //       if (isAuthenticated) {
  //         navigate('/');
  //       }

  return (
    <div className="login-form">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input id="username" name="username" type="text" value={userData.username} onChange={changeHandler} required/>
        </label>
        <label>
          Password:
          <input id="password" name="password" type="password" value={userData.password} onChange={changeHandler} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
