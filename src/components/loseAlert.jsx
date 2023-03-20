import Swal from "sweetalert2";
import "animate.css"

export default function LoseAlert (turns, setCards, cards, setShowWinAlert) {

   const notEnoughTurn = (cards.filter(card => !card.matched)).length/2

    if(turns < notEnoughTurn) {
      setTimeout(() => {
        Swal.fire({
         title: "You Lose",
         text: "Number of turns is over",
         icon: "error",
         width: 300,
         position: "top",
         toast: true,
         timer:10000,
         timerProgressBar: true,
         showConfirmButton: true,
         confirmButtonText: "Show Cards",
         confirmButtonColor: "#CF0A0A",
         showDenyButton: true,
         denyButtonText: "Play Again",
         denyButtonColor: "#CF0A0A",
         showCancelButton: true,
         cancelButtonText: "Select Level",
         cancelButtonColor: "#CF0A0A",
         iconColor: "#CF0A0A",
         color: "#EDDBC0",
         background: "#DD5353",
         showClass: {
          popup: "animate__animated animate__fadeInDown"
         },
         hideClass: {
          popup: "animate__animated animate__fadeOutUp"
         }
        }).then((result) => {
         if(result.isConfirmed){
            setTimeout(() => {
          setShowWinAlert(false)    
          setCards(
           cards.map(card=> {
            return {...card, matched: true}
           })
          ) 
        },1000)
         
         }
         else if (result.isDenied) {
          setTimeout(() => {
            window.location.reload()  
           }, 1000);
         }
         else if (result.isDismissed){
          setTimeout(() => {
            window.location="/"
          }, 1000);
         }
      }, 500);
        })  
      }
}





