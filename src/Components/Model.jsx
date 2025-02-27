import React from 'react'

function Model({children,onClose}) {
  return ( 
    <div className="fixed bg-black bg-opacity-50">
      <div className="bg-white">{children}
        <div className="border-2" onClick={onClose}></div>
      </div>
    </div>
  )
}

export default Model