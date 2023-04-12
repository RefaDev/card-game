import { startGame } from './startGame.js'

export const createGameMenu = () => {
   const title = document.createElement('h2')
   title.textContent = 'Выберите сложность'
   const gameSection = document.querySelector('.game')

   gameSection.innerHTML = ''

   const createButtons = (difficult) => {
      const button = document.createElement('button')

      button.classList.add('game__button')
      button.textContent = `${difficult} карт`

      button.addEventListener('click', () => {
         startGame(difficult)
      })
      return button
   }

   gameSection.append(
      title,
      createButtons(10),
      createButtons(12),
      createButtons(14),
      createButtons(16)
   )
}
