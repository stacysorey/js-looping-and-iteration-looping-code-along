// Code your solutions in this file


// returns an array of thank you messages for each name provided to the function
function writeCards (namesArray, event) {
  let thankYouCards = []
  for (let i = 0; i < namesArray.length; i++) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards
}


// invokes console.log once for each number, counting down from the number provided to zero
// logs each number when counting down, starting from the number provided
function countDown(startingNumber) {
  while (startingNumber > 0) {
    console.log(startingNumber);
    startingNumber -= 1;
  }
  console.log(startingNumber);
}