import React,{useState} from 'react';
import './tailwind.css'
import {calculateTotal,shuffleCards} from './Deck';
import Hero from './components/Hero';
import Board from './components/Board';

const App = () =>  {
  const SUITS = ['H', 'D', 'S', 'C'];
  const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const [deck, setDeck] = useState([]);
  const [playerCards,setPlayerCards] = useState([]);
  const [dealerCards,setDealerCards] = useState([]);
  const [isPlaying, setPlayingState] = useState(false);
  const [gameOver,setGameOver] = useState(false);
  const [getRound, setRound] = useState(0);
  const [winner,setWinner] = useState("");

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
