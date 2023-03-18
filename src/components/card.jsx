import React from 'react';
import earth from "/images/earth.png"


function Card({card, handleChoice, flipped, disabled}) {

    function handleClick () {
        !disabled ? handleChoice(card) : null
    }
    return ( 
    <div className='single-card position-relative'>
     <div className={flipped ? 'flipped col-4 mx-auto' : 'col-4 mx-auto'}>
        <img 
        className='front position-absolute border border-light-subtle border-4 rounded-circle' 
        src={card.src} />
        <img 
        className='back border border-light-subtle border-4 rounded-circle' 
        src={earth}
        onClick={handleClick} />
     </div>
    </div> 
    );
}

export default Card;