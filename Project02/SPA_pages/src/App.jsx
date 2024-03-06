import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './Users/Pages/Users';
import Error from './Places/Components/Error';
import NewPlace from './Places/Pages/NewPlace';
import MainNavigation from './Shared/components/Navigation/MainNavigation';
import './App.css'
import UserPlaces from './Places/Pages/UserPlaces';

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <BrowserRouter>
        <MainNavigation/>
        <Routes>
            <Route path='/' element={<Users/>}></Route>
            <Route path='/places/new' element={<NewPlace/>}></Route>
            <Route path='/:userId/places' element={<UserPlaces/>}></Route>


              
            <Route path='*' element={<Error/>}></Route>

        </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
