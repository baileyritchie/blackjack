import React,{useState} from 'react';
import './App.css';
import Card from './components/Card';

const App = props =>  {
  const SUITS = ['H', 'D', 'S', 'C'];
  const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const [deck, setDeck] = useState([]);
  const [playerCards,setPlayerCards] = useState([]);
  const [dealerCards,setDealerCards] = useState([]);
  const [isPlaying, setPlayingState] = useState(false);

  const shuffleCards = (array) => {
    for (let first = array.length - 1; first > 0; first--) {
      let second = Math.floor(Math.random() * (first + 1)); // random index from 0 to i
      [array[first], array[second]] = [array[second], array[first]]; // swap elements
    }
    return array;
  }
  const dealTwoCards = (arr) => {
    setPlayerCards(playerCards => [...playerCards, arr.pop(),arr.pop()]);
    setDealerCards(dealerCards => [...dealerCards,arr.pop(),arr.pop()]);
  }
  const dealOneCard = (arr,entityToDealTo) => {
    // where arr represents the deck
    if (entityToDealTo === 'player') {
      setPlayerCards();
    } else setDealerCards();
  }
  const initializeDeck = () => {
    setDeck( deck => {
      for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
        let suit = SUITS[suitIndex];
        for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
          let value = VALUES[valueIndex];
          deck.push([suit, value]);
        }
      }
      return shuffleCards(deck);
    });
    dealTwoCards(deck);
    setPlayingState(true);
  }

  return (
    <div className="container mx-auto text-center bg-gray-300 w-full h-screen">
      <h1 className=" text-6xl">Beginning of blackjack</h1>
      <button className="bg-blue-500 my-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => initializeDeck()}>Start Game</button>
      {dealerCards.length > 1 ? <div className="flex justify-center"><Card suite={dealerCards[0][0]} value={dealerCards[0][1]}/> </div> : <div></div>}
      {<div className="flex justify-center">
        {playerCards.map(hand => {
        return <Card suite={hand[0]} value={hand[1]}/>
        })}
      </div>}
    </div>
  );
}

export default App;
