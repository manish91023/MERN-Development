

import React, { useState } from 'react'
import Button from '../../Shared/components/FormElements/Button'
import Model from '../../Shared/components/UiELement/Model';

const PlaceItem = (props) => {
    const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>

<Model
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <h2>THE MAP!</h2>
        </div>
      </Model>

     <li className=' bg-indigo-300 rounded-lg'>
       <div>
         <img src={props.image}  alt={props.title} className=' rounded-lg' />
      </div>

     <div className=' p-4 flex flex-col justify-center items-center'>
        <h2 className=' font-bold'>
            {props.title}

        </h2>
        <h3 className=' font-bold'>
            {props.address}
        </h3>

        <p>
            {props.description}
        </p>
     </div>
     
     <div className=' flex justify-center items-center py-3 '>
        <Button inverse onClick={openMapHandler}>View On Map</Button>
        <Button to={`/places/${props.id}`}>Edit</Button>
        <Button danger>Delete</Button>
     </div>
    </li>
   <Model/>
   </React.Fragment>
  )
}

export default PlaceItem