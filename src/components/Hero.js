import React from 'react';

// a stylistic component representing the "Hero" of the page

const Hero = (props) => {
  const Button = () => (
    <button className="bg-blue-500 my-20 hover:bg-blue-700 
    text-white font-bold py-2 px-4 rounded flex-2" 
    onClick={props.buttonSubmit}>{props.buttonText}</button>
  )
  return (<div className="h-screen flex flex-col items-center justify-center">
    <h1 className="text-5xl">Welcome to Blackjack!</h1>
    <h1 className="text-xl">How to Play</h1>
    <h1 className="text-base my-2 md:w-1/2 sm:w-screen sm:mx-4">1. Click "Start Game" and scroll down to begin.</h1>
    <h1 className="text-base my-2 md:w-1/2 sm:w-screen sm:mx-4">2. You and the dealer will be given two cards
      to start, and you will only be able to see one of the dealer's cards.</h1>
    <h1 className="text-base my-2 md:w-1/2 sm:w-screen sm:mx-4">3. The goal of the game is to reach card values 
    that total 21 (and not over).</h1>
    <h1 className="text-base my-2 md:w-1/2 sm:w-screen sm:mx-4">4. You can add more cards by
      clicking "HIT" or if you are finished you can hit "STAY" .</h1>
    <h1 className="text-base my-2 md:w-1/2 sm:w-screen sm:mx-4">5. Jacks, Queens and Kings are 10s. 
      Aces are 1 or 11, and their value will be chosen for you.</h1>
    <Button />
  </div>)
}

export default Hero;