import React,{useState} from 'react';
import './App.css';
import Card from './components/Card';
import {Button,SpacedButton} from './appstyles';

const App = (props) =>  {
  const SUITS = ['H', 'D', 'S', 'C'];
  const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const [deck, setDeck] = useState([]);
  const [playerCards,setPlayerCards] = useState([]);
  const [dealerCards,setDealerCards] = useState([]);
  const [isPlaying, setPlayingState] = useState(false);
  const [gameOver,setGameOver] = useState(false);

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
  const Button = (props) => (
    <button className="bg-blue-500 my-20 hover:bg-blue-700 
    text-white font-bold py-2 px-4 rounded" 
    onClick={() => initializeDeck()}>{props.text}</button>
  )
  const SpacedButton = (props) => (
    <button className="bg-blue-500 my-20 hover:bg-blue-700 
    text-white font-bold py-2 px-4 m-4 rounded" onClick={()=> hitPlayer(deck)}>{props.text}</button>
  )
  const calculateTotal = (cards) => {
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
  const busted = (cards) => {
    return calculateTotal(cards) > 21;
  }
  const hitPlayer = (currentDeck) => {
    setPlayerCards(playerCards =>[...playerCards,currentDeck.pop()]);
    console.log(playerCards);
    if (busted(deck)) setGameOver(true);
  }
  return (
    <div className="container mx-auto text-center bg-gray-300 w-full h-screen">
      <h1 className="text-6xl">Beginning of blackjack</h1>
      <Button text="Start Game"/>
      {isPlaying ? <h1 className="text-2xl">Dealer's Card:</h1> : ""}
      {dealerCards.length > 1 ? 
      (<div className="flex justify-center">
        <Card suite={dealerCards[0][0]} value={dealerCards[0][1]}/>
      </div>) : ""}
      {isPlaying ? 
      (<div>
        <h1 className="text-2xl">Your Cards:</h1>
        <h1 className="text-lg my-4">Running Total: {calculateTotal(playerCards)}</h1>
      </div>) : ""}
      {<div className="flex justify-center">
        {playerCards.map(hand => {
        return <Card suite={hand[0]} value={hand[1]} key={hand}/>
        })}
      </div>}
      {isPlaying ? <SpacedButton text="HIT" /> : ""}
      {isPlaying ? <Button text="STAY"/> : ""}
      {gameOver ? 
      <>
        <h1>GAME OVER!</h1>
        <h1>{calculateTotal(playerCards) > 21 ? 'Player' : 'Dealer'} won!</h1>
      </> : ""}
    </div>
  );
}

export default App;
