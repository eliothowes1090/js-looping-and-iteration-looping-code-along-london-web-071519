// Code your solutions in this file

function writeCards(array, event) {
    const newArray = []
   for (let i = 0; i < array.length; i++) {
       newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
   }
   return newArray
}

function countdown(num) {
    let counter = num
    while (counter >= 0) {
        console.log(counter)
        counter -= 1
    }
}