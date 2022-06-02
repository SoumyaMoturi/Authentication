import React from 'react'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Dashboard = () => {
  let params = useParams();
  let {search} = useLocation();
  let param = new URLSearchParams(search);
  return (
    <div>
      <center>
      <header style={{"backgroundColor": "#3e5759","color":"white","margin": "20px","padding":"50px"}}>
          <h1>Dashboard</h1>
      </header>
    <div>
        <p><b>Name : </b>{param.get('Name')} </p>
        <p><b>Email : </b>{param.get('Email')} </p>
        <p><b>Mobile : </b>{param.get('Mobile')}</p>
        <p><Link className='Link' to='/login'>
            <button className="btn btn-dark btn-lg">Logout</button>
            </Link>
        </p>
    </div>
      
      </center>
    </div>
  )
}

export default Dashboard;
