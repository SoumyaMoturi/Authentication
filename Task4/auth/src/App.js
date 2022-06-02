import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import PageError from './Components/PageError';

const App = () => {

  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Register />} />
        <Route path='/login' element = {<Login />} />
       <Route path='/dashboard' element = {<Dashboard />} />
       <Route path='*' element = {<PageError />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
