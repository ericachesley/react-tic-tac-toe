"use strict";

let turn = 'x';
let moves = [['_','_','_'],['_','_','_'],['_','_','_']];


function showWinner(winner) {
  ReactDOM.render(
    <Winner winner={winner} />,
    document.querySelector('#winner')
  );
}

function checkWin() {
  if (checkWinAcross()) {
    showWinner(checkWinAcross());
  }
  if (checkWinDown()) {
    showWinner(checkWinDown());
  }
  if (checkWinDiag()) {
    showWinner(checkWinDiag());
  }
}

function checkWinAcross() {
  for (const row of moves) {
    if (row[0] === '_') {
      continue;
    }
    if (row[0] === row[1] && row[0] === row[2]) {
      return row[0];
    }
  }
}

function checkWinDown() {
  for (let col=0; col<3; col++) {
    if (moves[0][col] === '_') {
      continue;
    }
    if (moves[0][col] === moves[1][col] && moves[0][col] === moves[2][col]) {
      return moves[0][col];
    }
  }
}

function checkWinDiag() {
  if (moves[0][0] !== '_' 
      && moves[0][0] === moves[1][1] 
      && moves[0][0] === moves[2][2]) {
    return moves[0][0];
  }
  if (moves[0][2] !== '_' 
      && moves[0][2] === moves[1][1] 
      && moves[0][2] === moves[2][0]) {
    return moves[0][2];
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      imgUrl: '/static/images/square.png',
      winner: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.clicked === true) {
      alert('Already claimed - sorry!');
      return;
    }
    this.setState({clicked: true});
    const key = this.props.name;
    const row = key.split('.')[0];
    const col = key.split('.')[1];
    moves[row][col] = turn;
    if (turn === 'x') {
      this.setState({imgUrl: '/static/images/x.jpeg'});
      turn = 'o';
    } else {
      this.setState({imgUrl: '/static/images/o.png'});
      turn = 'x';
    }
    checkWin()
  }

  render() {
    return (
      <button onClick={this.handleClick}><img src={this.state.imgUrl} /></button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      turn: 'x'
    };
  }

  render() {
    const board = []
    for (let i=0; i<3; i++) {
      board.push(
        <div key={i} className='row'>
          <Square key={`${i}.0`} name={`${i}.0`} />
          <Square key={`${i}.1`} name={`${i}.1`}/>
          <Square key={`${i}.2`} name={`${i}.2`}/>
        </div>
      );
    }
    return (
      board
    );
  }
}

class Winner extends React.Component {
  render() {
    return(
      <p> {this.props.winner} wins! </p>
    )
  }
}

ReactDOM.render(
  <Board />,
  document.querySelector('#app')
);
