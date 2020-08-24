// a subset of functions relating to sorting and preparing the card deck

export const calculateTotal = (cards) => {
  let values = cards.map( card => card[1]);
  
  let sum = 0;
  values.forEach( (value) => {
    if (value === "A") {
      sum += 11;
    } else if (["J","K","Q"].includes(value)) {
      sum += 10;
    } else sum += Number(value)
  })
  //correct for aces
  values.filter( value => value==="A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

export const shuffleCards = (array) => {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1)); // random index from 0 to i
    [array[first], array[second]] = [array[second], array[first]]; // swap elements
  }
  return array;
}