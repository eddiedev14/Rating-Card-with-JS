//Variables
const rateBtn = document.getElementsByClassName("card__rating-rate__score__container-rate__btn");
const submitBtn = document.querySelector(".card__rating-rate__submit");
const thankyouCard = document.querySelector(".card__thankyou");
const rateCard = document.querySelector(".card__rating");
const rateText = document.querySelector(".card__thankyou-score__span");

//Colocamos addEventListener a todos los botones

for (let i = 0; i < rateBtn.length; i++) {
    
    rateBtn[i].addEventListener("click", e => {

        //Obtenemos el numero segun el innerText
        
        let numberSelect = e.target.innerText;

        //Habilitamos evento click al boton submit

        submitBtn.addEventListener("click", event => {
            event.preventDefault();

            //Ocultamos div rate y mostramos div thank you
            rateCard.style.display = "none";
            thankyouCard.style.display = "flex";
            
            //Colocamos puntuacion en el span
            rateText.innerText = numberSelect;
        });

    });

}