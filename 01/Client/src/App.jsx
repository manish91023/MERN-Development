import { useEffect, useState } from 'react';
import Axios from 'axios'

import './App.css'
import ImageUpload from './ImageUpload';
import ImageUploads from './Components/ImageUpload';

function App() {
  const [listUser,setListUser]=useState([]);
  const [name,setName]=useState('')
  const [age,setAge] = useState()
  const [username,setUsername]=useState('')



  useEffect(()=>{
    Axios.get("http://localhost:3000/getUsers")
    .then((res)=>{
      setListUser(res.data)
    })
  },[])

  const createUser= (e)=>{
    e.preventDefault()
    Axios.post("http://localhost:3000/createUser",{name,age,username}).then((res)=>{
      alert("user created")
    })

  }


  return (
    <>
    <div className='userDisplay'>
      {listUser.map((user)=>(
        <div>
          <h1>{user._id}</h1>
          <h1>{user.name}</h1>
          <h1>{user.username}</h1>
          </div>
      ))}
    </div>
    
    <div>
      <form onSubmit={createUser}>
        <input type="text" name='name' placeholder='enter name' onChange={(e)=>setName(e.target.value)}/>
        <input type="number" name='age' placeholder='enter age' onChange={(e)=>setAge(e.target.value)}/>
        <input type="text" name='username' placeholder='enter username' onChange={(e)=>setUsername(e.target.value)}/>
        <button>create user</button>
      </form>
    </div>

    <div>
      <ImageUploads/>
    </div>
    </>
  )
}

export default App
