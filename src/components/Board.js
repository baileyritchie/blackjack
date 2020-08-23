import React from 'react';
import Card from './Card';

const Board = ({getTotal,gameStatus,playingStatus,pCards,
  dCards,determineWinner,changeGameStatus,hitPlayer,currentDeck,
  hitText,stayText,round,addRound}) => {

  const SpacedButton = () => (
  <button className="bg-blue-500 my-20 hover:bg-blue-700 
  text-white font-bold py-2 px-4 m-4 rounded" onClick={() => {
    // do something here
    if (round < 1) {
      hitPlayer(currentDeck);
      addRound(1);
    } else {
      determineWinner() ? (changeGameStatus(true)) : (changeGameStatus(false));
      addRound(1);
    }
    }}>{hitText}</button>
  )
  const StayButton = () => (
    <button className="bg-blue-500 my-20 hover:bg-blue-700 
      text-white font-bold py-2 px-4 rounded flex-2" 
      onClick={() => determineWinner() ? (changeGameStatus(true)) : 
      (changeGameStatus(false))}>{stayText}
    </button>
  )
  return (<div> {console.log("game status:",gameStatus,"round:",round)}
    {gameStatus && round > 0 ? 
    <>
      <h1 className="text-6xl">GAME OVER!</h1>
      <h1>{getTotal(pCards) > 21 ? 'Player' : 'Dealer'} won!</h1>
    </> : ""}
    {playingStatus ? <h1 className="text-2xl">Dealer's Card:</h1> : ""}
    {dCards.length > 1 ? 
    (<div className="flex justify-center">
      <Card suite={dCards[0][0]} value={dCards[0][1]}/>
    </div>) : ""}
    {playingStatus ? 
    (<div>
      <h1 className="text-2xl">Your Cards:</h1>
      <h1 className="text-lg my-4">Running Total: {getTotal(pCards)}</h1>
    </div>) : ""}
    {<div className="flex flex-wrap justify-center">
      {pCards.map(hand => {
      return <Card suite={hand[0]} value={hand[1]} key={hand}/>
      })}
    </div>}
    {playingStatus ? <SpacedButton text="HIT" /> : ""}
    {playingStatus ? <StayButton text="STAY"/> : ""}
  </div>)
}

export default Board;
