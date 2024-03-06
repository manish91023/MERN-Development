
import React from 'react'
import UserList from '../Components/UserList'
const Users = () => {
    const Users = [
        {id:'ul' ,name:'max schwarz',image:"https://images.unsplash.com/photo-1709065556197-2cbe782878e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",places:3 ,placecount:2}
    ];
  return (
        <div className=' flex justify-center items-center mt-3'>

            <UserList items={Users}/>
        </div>
    )
}

export default Users