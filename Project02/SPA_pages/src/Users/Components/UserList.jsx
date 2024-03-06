
import UserItem from './UserItem'
import './UserList.css'
import React from 'react'

const UserList = (props) => {
    if(props.items.length==0){
        return (
            <h1 className='flex justify-center items-center'>no Users found</h1>
        )
    }
  return (
        <ul >
            {props.items.map(user=>(
                <UserItem 
                key={user.id} 
                id={user.id} 
                image={user.image}
                name={user.name}
                placeCount={user.places}
                />
            ))}
        </ul>
    )
}

export default UserList