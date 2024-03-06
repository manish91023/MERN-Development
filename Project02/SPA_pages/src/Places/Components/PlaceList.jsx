
import React from 'react'
import PlaceItem from './PlaceItem'

const PlaceList = (props) => {
    if(props.items.length===0){
        return <div>
            <div>

            <h1>NO placefs ound maybe create one</h1>
            <button>Share place</button>
            </div>
        </div>
    }

  return (
    <div className=' w-[500px] h-[500px] mx-auto mt-10 '>
        <ul className='flex justify-center '>
            {props.items.map(place=>(
                <PlaceItem key={place.id} 
                id={place.id} 
                image={place.imageUrl}
                title={place.title}
                description={place.description}
                address={place.address}
                creatorId={place.creator}
                cordinate={place.location}
                
                />
            ))}
        </ul>
    </div>
  )
}

export default PlaceList