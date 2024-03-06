import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = props => {
 const [isBackdropHookAvailable, setIsBackdropHookAvailable] = useState(false);

 useEffect(() => {
    const checkBackdropHook = () => {
      const backdropHook = document.getElementById('backdrop-hook');
      if (backdropHook) {
        setIsBackdropHookAvailable(true);
      } else {
        setTimeout(checkBackdropHook, 100); // Retry after 100ms
      }
    };

    checkBackdropHook();
 }, []);

 if (!isBackdropHookAvailable) {
    return null; // Don't render anything until the backdrop-hook is available
 }

 return
 <>
   const backdropHook = document.getElementById('backdrop-hook');
console.log(backdropHook); // Add this line to check if the element is found
 ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
 );
 </>
};

export default Backdrop;