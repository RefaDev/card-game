import { createGameCard } from './gameCard.js'
import { createGameMenu } from './gameMenu.js'
import { bgItems } from './mocks.js'
import { createIconsArr, duplArr, shuffleArr } from './utils.js'

export const startGame = (difficult) => {
   let firstCard = null
   let secondCard = null
   let clickable = true
   let steps = 0
   let timer = 0
   let timerF = setInterval(() => {
      timer++
   }, 1000)

   const gameSection = document.querySelector('.game')
   gameSection.innerHTML = ''

   const gameTable = document.createElement('div')
   gameTable.classList.add('game-table')
   const congratsBlock = document.createElement('div')
   congratsBlock.classList.add('congrats-block')
   const congrats = document.createElement('h1')
   congrats.textContent = 'Ты победил! молодец!'
   congrats.classList.add('congrats')
   const stepsAmount = document.createElement('p')
   const timerShow = document.createElement('p')
   congratsBlock.append(congrats, stepsAmount, timerShow)
   gameTable.append(congratsBlock)
   const cardsBg = createIconsArr(difficult)
   const duplicatedCards = duplArr(cardsBg)

   const randomArr = shuffleArr(duplicatedCards)
   randomArr.forEach((element) => {
      gameTable.append(createGameCard(element))
   })

   const restartBtn = document.createElement('button')
   restartBtn.textContent = 'Рестарт'
   restartBtn.classList.add('restart-btn')

   gameSection.append(gameTable, restartBtn)
   restartBtn.addEventListener('click', (e) => {
      steps = 0
      timer = 0
      createGameMenu()
      clearInterval(timerF)
   })

   const shirts = document.querySelectorAll('.notflipped')
   shirts?.forEach((item, index) => {
      item.style.backgroundImage = `url(${bgItems[index].src})`
   })

   const cards = document.querySelectorAll('.game-card')

   cards.forEach((card, index) => {
      card.addEventListener('click', () => {
         if (clickable == true && !card.classList.contains('success')) {
            card.classList.add('flip')

            if (firstCard === null) {
               firstCard = index
            } else {
               if (index !== firstCard) {
                  secondCard = index
                  clickable = false
               }
            }
            if (firstCard !== null && secondCard !== null && firstCard !== secondCard) {
               if (
                  cards[firstCard].firstElementChild.textContent ===
                  cards[secondCard].firstElementChild.textContent
               ) {
                  setTimeout(() => {
                     cards[firstCard].classList.add('success')
                     cards[secondCard].classList.add('success')

                     firstCard = null
                     secondCard = null
                     clickable = true
                     steps++
                  }, 500)
               } else {
                  setTimeout(() => {
                     cards[firstCard].classList.remove('flip')
                     cards[secondCard].classList.remove('flip')
                     firstCard = null
                     secondCard = null
                     clickable = true
                     steps++
                  }, 500)
               }
            }
         }
         if (Array.from(cards).every((card) => card.className.includes('flip'))) {
            clearInterval(timerF)
            congratsBlock.style.display = 'block'
            stepsAmount.textContent = `Количество попыток ${steps}`
            timerShow.textContent = `Затраченное время ${timer} секунд`
            steps = 0
            timer = 0
         }
      })
   })
}
