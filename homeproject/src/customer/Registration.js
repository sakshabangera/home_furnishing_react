import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import "./Registration.css";
import { register } from "../Store";
import { useNavigate } from 'react-router-dom';
import { registration } from "./actions";
import axios from "axios";
import { Link } from "react-router-dom";
import { registerUser ,setStatus} from "./registrationSlice";
import { UseSelector } from "react-redux";

const Registration=()=>{
  const registerStatus= useSelector( state => state.register.success)
    const dispatch=useDispatch();
    const navigate=useNavigate ();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        phone: '',
        address: '',
        password: ''
      });
    const [showMessage, setShowMessage] = useState(false); // State to manage message visibility
    // const error = useSelector(state => state.auth.error);
    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(registerUser(formData));
        if(!setStatus){
          alert("Username or Email already exists")
      }
      }
      useEffect(() => {
        if(registerStatus){
            alert("Registration Successful")
            navigate('/login')
            dispatch(setStatus())
        }
    },[registerStatus])


    console.log(formData)
    return(
        <div onSubmit={submitHandler}>
            <div  className="registration-form">
            <form>
            <h2>REGISTRATION PAGE</h2>
            <label>First Name:
            <input type="text" name="first_name" onChange={changeHandler}/>
            </label>
            <label>Last Name:
            <input type="text" name="last_name" onChange={changeHandler}/>
            </label>
            <label>username:
            <input type="text" name="username" onChange={changeHandler}/>
            </label>
            <label>Email id:
            <input type="email" name="email" onChange={changeHandler}/>
            </label>
            <label>Phone Number:
            <input type="tel" name="phone" onChange={changeHandler}/>
            </label>
            <label>Address:
            <input type="text" name="address" onChange={changeHandler}/>
            </label>
            <label>Password:
            <input type="password" name="password" onChange={changeHandler}/>
            </label>
            {/* <Link to="/login" > */}
            <button type="submit">Register</button>
            {/* </Link> */}
            </form>
            </div>
        </div>
    );
}
export default Registration