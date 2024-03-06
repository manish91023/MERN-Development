


import React from 'react'
import PlaceList from '../Components/PlaceList'
import { useParams } from 'react-router-dom'

const UserPlaces = () => {
    const Dummy_place =[
        {
            id:'p1',
            title:"Empire State Building",
            description:"One of the most famous sky scrapers in the world ",
            imageUrl:"https://images.unsplash.com/photo-1709065556197-2cbe782878e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            address:"20 2 34th st,New York , NY 10001",
            location:{
                lat:40.7484405,
                lng:-73.9878584
            },
            creator:"u2"

        }
    ]

    const userId = useParams().userId;
    const loadedPlaces = Dummy_place.filter(place=>place.creator===userId)

  return (
    
    <PlaceList items={loadedPlaces}/>
  )
}

export default UserPlaces