// контейнер всей игры
let gameContainer = document.querySelector(`.game-container`);
let hintsNode = document.querySelector('#hints');
let textNode = document.querySelector('.text');

// 4 подарка

let card1 = document.querySelector(`.card1`);
let card2 = document.querySelector(`.card2`);
let card3 = document.querySelector(`.card3`);
let card4 = document.querySelector(`.card4`);
let counter = 3;


// выводим сюда результат
let alerts = document.querySelector(`#alert`);

gameContainer.addEventListener(`click`, onCardClick); 



function onCardClick(evt) {
    
    let node = evt.target;
  
    
    let card = node.closest(`.card`);

    
    if(card) {
      
        counter--;
        if(counter == 2) {
            alerts.innerHTML = `Это не то, что я хочу :( Попробуй ещё раз.`;
            if(card.classList.contains(`card2`)) {
             card.classList.add(`animate__flip`);
            
            
            } else{
             card.classList.add(`animate__zoomOut`);
             card.classList.add(`disabled`);
             
            }
         } else if(counter == 1) {
               alerts.innerHTML = `Теперь ты знаешь, что я хочу в подарок :).`;
            if(card.classList.contains(`card2`)) {
             card.classList.add(`animate__flip`);
             card1.classList.add(`animate__zoomOut`);
             card2.classList.add(`animate__zoomOut`);
             card3.classList.add(`animate__zoomOut`);
             card4.classList.add(`animate__zoomOut`);
             
            } else{
             card.classList.add(`animate__zoomOut`);
              card.classList.add(`disabled`);
            }

         } else if(counter == 0) {
            alerts.innerHTML = `Теперь ты знаешь, что я хочу в подарок :).`;
            if(card.classList.contains(`card2`)) {
             card.classList.add(`animate__flip`);
           
            } else{
             card.classList.add(`animate__zoomOut`);
              card.classList.add(`disabled`);
            }

         }
     
        }
    }

    hintsNode.addEventListener('click', function() {
     textNode.classList.toggle('text');
    });