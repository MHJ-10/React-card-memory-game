import Swal from "sweetalert2";
import "animate.css"

export default function WinAlert (turns, cards) {
    if (
     cards.every(card => card.matched) && 
     cards.some(card => card.matched) &&
     turns>=0
      ){
     setTimeout(() => {
        Swal.fire({
            title: "You Win",
            text: "The cards are matched",
            icon: "success",
            width: 300,
            position: "top",
            toast: true,
            timer:10000,
            timerProgressBar: true,
            showConfirmButton: true,
            confirmButtonText: "Try Again",
            confirmButtonColor: "#46a012",
            showDenyButton: true,
            denyButtonText: "Select Level",
            denyButtonColor: "#46a012",
            iconColor: "#A5DC86",
            color: "#EDDBC0",
            background: "#33760d",
            showClass: {
             popup: "animate__animated animate__fadeInDown"
            },
            hideClass: {
             popup: "animate__animated animate__fadeOutUp"
            }
           }).then((result) => {
            if(result.isConfirmed){
               setTimeout(() => {
                  window.location.reload()  
                 }, 1000);
            }
            else if (result.isDenied){
               setTimeout(() => {
                  window.location="/"
                }, 1000);
            }
           })
     }, 500);
    }
  }