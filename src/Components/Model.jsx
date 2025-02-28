import React from 'react';

function Model({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 relative">
        <div className="absolute top-2 right-2 cursor-pointer border-2 px-2 py-1 shadow-xl" onClick={onClose}>
          X
        </div>
        {children}
      </div>
    </div>
  );
}

export default Model;
 