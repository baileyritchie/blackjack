import React from 'react';

// a stylistic component representing the "Hero" of the page

const Hero = (props) => {
  const Button = () => (
    <button className="bg-blue-500 my-20 hover:bg-blue-700 
    text-white font-bold py-2 px-4 rounded flex-2" 
    onClick={props.buttonSubmit}>{props.buttonText}</button>
  )
  return (<div className="h-screen flex flex-col items-center justify-center">
    <h1 className="text-6xl">Welcome to Blackjack!</h1>
    <h1 className="text-xl">How to Play</h1>
    <h1 className="text-base my-2 w-32">jafasfksfmlasfms</h1>
    <Button />
  </div>)
}

export default Hero;