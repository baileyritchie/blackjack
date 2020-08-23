import React from 'react'

const Card = ({suite,value}) => {
  const getSymbol = (symbol) => {
    let result = '';
    switch (symbol) {
      case "C":
        result += "♣ ♣ ♣";
        break;
      case "H":
        result += "♥ ♥ ♥";
        break;
      case "D":
        result += "♦ ♦ ♦";
        break;
      case "S":
        result += "♠ ♠ ♠";
        break
      default:
        result += ""
    }
    return result;
  }

  return (<div className="w-56 h-64 m-4 rounded bg-white overflow-hidden shadow-lg flex-col">
    <h2 className="text-left text-lg m-4">{getSymbol(suite)}</h2>
    <h2 className="text-center font-bold py-10 text-2xl">{value}</h2>
    <h2 className="text-right content-end py-12 text-lg mx-2">{getSymbol(suite)}</h2>
  </div>)
}


export default Card;