export const createGameCard = (flippedBg) => {
   const card = document.createElement('div')
   card.classList.add('game-card')

   const notFlippedCardI = document.createElement('i')
   notFlippedCardI.classList.add('notflipped')

   const flippedCardI = document.createElement('i')
   flippedCardI.classList.add('flipped')
   flippedCardI.textContent = flippedBg

   card.append(flippedCardI, notFlippedCardI)
   return card
}
