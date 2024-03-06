

import React from 'react'

const MainHeader = (props) => {
  return (
    <header className=' flex px-6 py-3 justify-center  items-center md:gap-3 md:justify-between text-white'>
        {props.children}
    </header>
  )
}

export default MainHeader