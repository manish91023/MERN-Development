
import { Link } from 'react-router-dom'
import './UserItem.css'
import React from 'react'
import Avtar from '../../Shared/components/UiELement/Avtar'
const UserItem = (props) => {
  return (
        <li >
            <div className=' flex bg-yellow-500 p-3 w-[200px] h-[80px] rounded-lg'>
                <Link to={`/${props.id}/places`}>
                    <div className=' flex'>
                        <Avtar image={props.image}/>
                        <div className=' mx-3'>
                            <h2>{props.name}</h2>
                            <h3>{props.placeCount} {props.placecount===1?'place':"places"}
                            
                            </h3>
                        </div>
                    </div>
                </Link>    
            </div>
        </li>
    )
}

export default UserItem