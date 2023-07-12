import React, { useState } from 'react';
import './App.css';
import Square from './Square';


function App() {
  const [squares, setSquares] = useState(["","","","","","","","",""])
  const [player, setPlayer] = useState(true)

  const handleClick = () => {
    setSquares(["","","","","","","","",""])
    setPlayer(true)
  }

  const calculateWinner = (arr) => {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
    let message = 'Who will win?'

    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i]

      if(message === 'Who will win?' && !squares.includes('')){
        message = `Looks like neither of you won! Play again!`
      }else{
        if(arr[a] && arr[a] === arr[b] && arr[a] === arr[c]){
          message = `${arr[a]} won!` 
        } 
      }
    }
    return message
  }

  const playerTurn = (player) => {
    if(player){
      return `It's X's turn`
    }
    else {
      return `It's O's turn`
    }
  }

  return (
    <div className="App">
      <span>{calculateWinner(squares)}</span>
      <div className='container'>
        {squares.map((val,index)=> {
          return (<Square
            key={index} 
            squareValue={val}
            index={index}
            squares={squares}
            setSquares={setSquares}
            player={player}
            setPlayer={setPlayer}
          />)
        })}
      </div>
      <span>{playerTurn(player)}</span>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
