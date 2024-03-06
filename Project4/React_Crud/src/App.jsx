import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddForm from './Components/AddForm'
import UserList from './Components/UserList'
import Edit from './Components/Edit'
import {BrowserRouter,Route,Router, Routes} from 'react-router-dom'

function App() {
 
  return (
    <BrowserRouter>
    
      
        <Routes>
            <Route path='/edit/:id' element={<Edit/>}></Route>
            <Route path='/' element={
              <>
              <AddForm />
              <UserList />
              </>
              } >  
            </Route>
        </Routes>
    </BrowserRouter>

  )
}

export default App
