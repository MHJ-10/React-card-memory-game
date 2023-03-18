import { useEffect } from "react";

export default function UseMatchCards (choiceOne, choiceTwo, setDisabled, setCards, 
    resetTurns, shufflecards) {
    useEffect (() => {
        if(choiceOne && choiceTwo){
          setDisabled(true)
           if(choiceOne.src === choiceTwo.src) {
             setCards(prevCards => {
               return prevCards.map(card => {
                if(card.src === choiceOne.src) {
                return {...card, matched: true}
                } else {
                   return card
                }
             })
             })
             resetTurns() 
            }else {
             setTimeout(() => {
              resetTurns() 
             }, 1000);  
             }  
        }
     },[choiceOne, choiceTwo])

     useEffect(() => {
        shufflecards()
       },[])
}