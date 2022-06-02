import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate=useNavigate();
  const [data,setData] = useState({
        Name : '',
        Email : '',
        Mobile : '',
        Password : '',
        Cpwd : ''
      })
    const changeHandler = e => {
      setData({...data,[e.target.name]:e.target.value});
    }
    const submitHandler = e =>{
      e.preventDefault();
      console.log(data.Name,data.Email,data.Mobile,data.Password);
      if(data.Mobile.length === 10 ){
        if(data.Password === data.Cpwd){
        const user = {Name:data.Name, Mobile:data.Mobile, Password:data.Password};
        localStorage.setItem(data.Email,JSON.stringify(user));
        //alert("Registration success");
        navigate(`/dashboard?Name=${user.Name}&Email=${data.Email}&Mobile=${user.Mobile}`);
          
        }
        else{
          alert("Passwords did not match")
        }
      }
      else{
        alert("Enter a valid mobile Number");
      }

      }
  return (
    <div>
      <center>
          <form onSubmit={submitHandler} style = {{"backgroundColor": "#3e5759","margin":"5% 25%","padding":"50px","border":"5px double white","borderRadius":"10%",}}>
          <h1 style={{"color":"white","marginBottom":"35px"}}>Registration Page</h1>
          <div className="input-group mb-3">
              <span className="input-group-text">Name</span>
              <input type="text"  className="form-control " name="Name" placeholder="Enter your name" onChange = {changeHandler} required />
          </div>
          <div className="input-group mb-3">
              <span className="input-group-text">Email</span>
              <input type="email"  className="form-control " name="Email" placeholder="Enter your email" onChange = {changeHandler} required/>
          </div>
          <div className="input-group mb-3">
              <span className="input-group-text">Mobile</span>
              <input type="text"  className="form-control " name="Mobile" placeholder="Enter your 10-digit Mobile" onChange = {changeHandler} required />
          </div>
          <div className="input-group mb-3">
              <span className="input-group-text">Password</span>
              <input type="password"  className="form-control " name="Password" placeholder="Create your password" onChange = {changeHandler} required/>
          </div>
          <div className="input-group mb-3">
              <span className="input-group-text">Confirm Password</span>
              <input type="password"  className="form-control " name="Cpwd" placeholder="Confirm  your name" onChange = {changeHandler} required/>
          </div>
        
          <button type="submit" className="btn btn-light btn-lg" value="Register">Register</button>
          <p className="mt-2" style={{"color":"#999966"}}>
              Already have account? <Link style={{"textDecoration":"None","color":"#ccffff"}} to="/login">Login</Link>
            </p>
          {/* <Input name="Name" type="text" />
          <Input name="Email" type="email" />
          <Input name="Mobile" type="text"   />
          <Input name="Password" type="password" />
          <Input name="Confirm Password" type="password"  /
          <Button value="Register" className="btn btn-light btn-lg" onClick={()=>handleSubmit()}  />  */}
          </form>
      </center>
    </div>
  )
}

export default Register