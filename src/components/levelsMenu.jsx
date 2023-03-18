import React from 'react';
import { Link } from 'react-router-dom';


function LevelsMenu() {
    return ( 
    <>
        <div className='level list list-group text-center w-50 mx-auto my-5 bg-danger'>
        <h3 className='text-light'>Select a level to start</h3>
        <Link 
        to="easy" 
        className='list-group-item list-group-item-action list-group-item-danger'>
            Easy
        </Link>
        <Link 
        to="normal" 
        className='list-group-item list-group-item-action list-group-item-danger'>
            Normal
        </Link>
        <Link 
        to="hard" 
        className='list-group-item list-group-item-action list-group-item-danger'>
            Hard
        </Link>
        </div> 
         <ul className='list-group w-25 mx-auto my-5 bg-warning'>
        <h4 className='text-light text-center pt-2'>Guide</h4>
           <li className='list-group-item list-group-item-warning'>
           The easy level includes 12 cards and you can do 13 turns.
           </li>
           <li className='list-group-item list-group-item-warning'>
           The normal level includes 16 cards and you can do 15 turns.
           </li>
           <li className='list-group-item list-group-item-warning'>
           The hard level includes 20 cards and you can do 17 turns.
           </li>
        </ul>     
    </>
      

      
    )
}

export default LevelsMenu;