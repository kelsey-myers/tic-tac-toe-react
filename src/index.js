import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

class Board extends React.Component {
	
 renderSquare(i) {
    return (
	<Square 
	value={this.props.squares[i]}
	onClick={() => this.props.onClick(i)}
	/>
	);
  }

  render() {

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [{
				squares: Array(9).fill(null),
			}],
		stepNumber: 0,
		xIsNext: true,
		};
	}
	
	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			history: history.concat([{
			squares: squares,			
			}]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext,
			});
	}
	
	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) === 0,
		});
	}
	
  render() {
	const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
	const X = <p> Next player: <FontAwesomeIcon className="iconSpace" icon={faTimes} size='lg'/></p>;
	const O = <p> Next player: <FontAwesomeIcon className="iconSpace" icon={faCircle} size='lg'/></p>;
	
	const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
         <li key={move}>
          <button className="btn" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
	
    let status;
    if (winner) {
		if (winner === 'X') {
			status = <p className="pulse"> Winner: <FontAwesomeIcon className="iconSpace" icon={faTimes} size='lg'/> </p>;
		} else if (winner === 'O') {
			status = <p className="pulse"> Winner: <FontAwesomeIcon className="iconSpace" icon={faCircle} size='lg'/> </p>;
		}
    } else {
      status = (this.state.xIsNext ? X : O);
    }
	  
    return (
      <div className="center">
	  	<h1> Tic-Tac-Toe Project (Desktop Only!)</h1>
			<h3><b> This minigame has the following features: </b><br/>
				<ul className="ul"><li>Lets you play tic-tac-toe!</li>
				<li>Indicates when a player has won the game.</li>
				<li>Stores a game’s history as a game progresses.</li>
				<li>Allows players to review a game’s history and see previous versions of a game’s board.</li>
				</ul></h3><br/>
		<div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info features-list">
          <div className="nextPlayer">{status}</div>
          <ol>{moves}</ol>
        </div>
		</div>
	  </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
