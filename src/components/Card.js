import React from 'react'

const Card = ({suite,value}) => {
  return (<div className="w-56 h-64 m-4 rounded bg-white overflow-hidden shadow-lg">
    <h1>CARD</h1>
    <h2>{suite}</h2>
    <h2>{value}</h2>
  </div>)
}


export default Card;