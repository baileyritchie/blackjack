import React,{useState} from 'react';
import './tailwind.css'
import Card from './components/Card';
import Hero from './components/Hero';
import Board from './components/Board';

const App = (props) =>  {
  const SUITS = ['H', 'D', 'S', 'C'];
  const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const EMPTY_ARR = []
  const [deck, setDeck] = useState([]);
  const [playerCards,setPlayerCards] = useState([]);
  const [dealerCards,setDealerCards] = useState([]);
  const [isPlaying, setPlayingState] = useState(false);
  const [gameOver,setGameOver] = useState(false);
  const [getRound, setRound] = useState(0);
  const [winner,setWinner] = useState("");

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
  const refreshDeck = () => {
    setDeck(EMPTY_ARR);
    setPlayerCards(EMPTY_ARR);
    setDealerCards(EMPTY_ARR);
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
  const findWinner = () => {
    if (calculateTotal(playerCards) === 21 &&
    calculateTotal(dealerCards) < 21) {
      return 'player';
    } else if ( calculateTotal(dealerCards) === 21 &&
    calculateTotal(playerCards) < 21 ) {
      return 'dealer';
    } else return "BUST!";
  }
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
  const hitPlayer = (currentDeck) => {
    setPlayerCards(playerCards =>[...playerCards,currentDeck.pop()]);
  }
  return (
    <div className="app">
      <div className="container mx-auto text-center">
        <Hero buttonText="Start Game" buttonSubmit={() => initializeDeck()}/>
        <Board 
          getTotal = {(cards)=> calculateTotal(cards)}
          gameStatus = {gameOver}
          playingStatus = {isPlaying} 
          pCards = {playerCards}
          dCards = {dealerCards}
          determineWinner = {() => findWinner()}
          changeGameStatus = {(state) => setGameOver(state) }
          hitPlayer = {(deck) => hitPlayer(deck)}
          currentDeck = {deck}
          hitText = "HIT"
          stayText="STAY"
          round = {getRound}
          addRound = {(currentRound,newRound) => setRound(currentRound+newRound)}
          winner = {winner}
          setWinner = {(val) => setWinner(val)}/>
      </div>
    </div>
    
  );
}

export default App;
