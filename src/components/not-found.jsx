import React from 'react';
import errorImage from "/images/not-found.png"

function NotFound() {
    return ( 
        <div className='text-center mt-5 pt-5'>
         <img 
         src={errorImage}
         className='img-fluid rounded'
         />
        <h4 className='text-danger bg-light bg-opacity-75 rounded p-2 w-25 mx-auto mt-3'>The Page Not Found.</h4>   
        </div>
        
     );
}

export default NotFound;