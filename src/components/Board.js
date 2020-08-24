import React from 'react';
import Card from './Card';

// Functional Component representing Card Display

const Board = ({getTotal,gameStatus,playingStatus,pCards,
  dCards,changeGameStatus,hitPlayer,currentDeck,
  hitText,stayText,round,addRound,winner,setWinner}) => {

  const SpacedButton = () => (
  <button className="bg-blue-500 my-20 hover:bg-blue-700 
  text-white font-bold py-2 px-4 m-4 rounded" onClick={() => {
    hitPlayer(currentDeck);
    addRound(round,1);
    }}>{hitText}</button>
  )
  const playerLarger = () => {
    return pCards > dCards;
  }
  const isBust = (cards) => {
    return getTotal(cards) > 21;
  }
  const StayButton = () => (
    <button className="bg-blue-500 my-20 hover:bg-blue-700 
      text-white font-bold py-2 px-4 rounded flex-2" 
      onClick={() => {
        while (getTotal(pCards) <= 21 ) {
          if (playerLarger) {
            addRound(round,1);
            changeGameStatus(true);
            setWinner('Player');
            break;
          } else if (!playerLarger) {
            addRound(round,1);
            changeGameStatus(true);
            setWinner('Dealer');
            break;
          } 
        }
      }}>{stayText}
    </button>
  )
  return (<div>
    {gameStatus && round > 0 && !isBust(pCards) ? 
    <>
      <h1 className="text-5xl my-12">GAME OVER!</h1>
      <h1 className="my-12 text-3xl">{winner} won with {winner ==='Player' ? getTotal(pCards): getTotal(dCards)}!</h1>
    </> : ""}
    {isBust(pCards) ? <h1 className="text-5xl">You lost - BUST!</h1> : ""}
    { winner || isBust(pCards) ? 
    <>
      <h1 className="text-3xl ">Refresh our page to play again.</h1>
    <h1 className="text-2xl m-4">Dealer ended with {getTotal(dCards)}.</h1>
      <div className="flex flex-wrap justify-center">{dCards.map(hand => {
        return <Card suite={hand[0]} value={hand[1]} key={hand}/>})}
      </div>
    </> : 
    <> 
      {playingStatus ? <h1 className="text-2xl">Dealer's Hand:</h1> : ""}
      {dCards.length > 1 ? 
      (<div className="flex justify-center">
        <Card suite={dCards[0][0]} value={dCards[0][1]}/>
      </div>) : ""}
      {winner ? (<div className="flex justify-center">
        <Card suite={dCards[1][0]} value={dCards[1][1]}/>
      </div>) : ""}
      {playingStatus ? 
      (<div>
        <h1 className="text-2xl">Your Hand:</h1>
        <h1 className="text-lg my-4">Running Total: {getTotal(pCards)}</h1>
      </div>) : ""}
      {<div className="flex flex-wrap justify-center">
        {pCards.map(hand => {
        return <Card suite={hand[0]} value={hand[1]} key={hand}/>
        })}
      </div>}
      {playingStatus ? <SpacedButton text="HIT" /> : ""}
      {playingStatus ? <StayButton text="STAY"/> : ""}
    </>}
    
  </div>)
}

export default Board;
