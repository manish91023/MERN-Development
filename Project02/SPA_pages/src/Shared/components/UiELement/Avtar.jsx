
import React from 'react'

const Avtar = (props) => {
  return (
    <div>
        <div className=' '>
            <img src={props.image} alt={props.name} 
            className=' w-[50px] h-[50px] object-cover rounded-full'
            />
        </div>
    </div>
  )
}

export default Avtar