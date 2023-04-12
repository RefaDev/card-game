export const shuffleArr = (arr) => {
   let shuffled = arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)

   return shuffled
}

export const duplArr = (arr) => arr.reduce((res, current) => res.concat([current, current]), [])

export const createIconsArr = (initCount) => {
   const cardsBg = ['1', '2', '3', '4', '5', '6', '7', '8']
   switch (initCount) {
      case 10:
         return cardsBg.slice(0, 5)
      case 12:
         return cardsBg.slice(0, 6)
      case 14:
         return cardsBg.slice(0, 7)
      case 16:
         return cardsBg

      default:
         break
   }
}
