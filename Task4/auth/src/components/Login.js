import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";


const Login = () => {
    let navigate=useNavigate();
    const [data,setData] =useState({
        Email :"",
        Password :""
    });
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value});
    }
    const submitHandler = e =>{
        e.preventDefault();
        console.log(data.Email);
        var userdata = JSON.parse(localStorage.getItem(data.Email));
        //let history = useHistory();
        if(userdata !== null){
            if(userdata.Password === data.Password){
                console.log("logged In");
                //return <Redirect to="/dashboard" />
                // history.push("/dashboard");
                navigate(`/dashboard?Name=${userdata.Name}&Email=${data.Email}&Mobile=${userdata.Mobile}`);


            } 
            else{
                console.log("Wrong Password")
            }
        }
        else{
            console.log("Email Doesn't Exist!")
        }
        
    }
  return (
    <div>
      <center>
          <form onSubmit={submitHandler} style = {{"backgroundColor": "#3e5759","margin":"5% 25%","padding":"50px","border":"5px double white","borderRadius":"10%",}}>
          <h1 style={{"color":"white","marginBottom":"35px"}}>Login Page</h1>
        
          <div className="input-group mb-3">
              <span className="input-group-text">Email</span>
              <input type="email"  className="form-control " name="Email" placeholder="Enter your email" onChange = {changeHandler} />
          </div>
          
          <div className="input-group mb-3">
              <span className="input-group-text">Password</span>
              <input type="password"  className="form-control " name="Password" placeholder="Create your password" onChange = {changeHandler}/>
          </div>
        
          <button type="submit" className="btn btn-light btn-lg" value="Login">Login</button>
        
          </form>
      </center>
    </div>
  )
}

export default Login
