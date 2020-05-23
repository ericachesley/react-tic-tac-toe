"use strict";

let turn = 'x';

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      imgUrl: '/static/images/square.png'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.clicked === true) {
      alert('Already claimed - sorry!');
      return;
    }
    this.setState({clicked: true});
    if (turn === 'x') {
      this.setState({imgUrl: '/static/images/x.jpeg'});
      turn = 'o';
    } else {
      this.setState({imgUrl: '/static/images/o.png'});
      turn = 'x';
    }
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
          <Square key={`${i}.0`} />
          <Square key={`${i}.1`} />
          <Square key={`${i}.2`} />
        </div>
      );
    }
    return (
      board
    );
  }
}

// class Game extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       turn: 'x'
//     };

//     this.takeTurn = this.takeTurn.bind(this);

//     takeTurn() {
//       const player = this.state.turn
//     }
// }

//   renderWord() {
//     const charDivs = [];
//     for (const [ i, letter ] of Object.entries(this.props.word)) {
//       let displayLetter;
//       if (this.state.guessedLetters.includes(letter)) {
//         displayLetter = letter;
//       }

//       charDivs.push(
//         <div key={i} className="letter-box">
//           {displayLetter}
//         </div>
//       );
//     }

//     return charDivs;
//   }

//   renderLetterButtons() {
//     const letterBtns = [];
//     for (const letter of ALPHABET) {
//       const handleClick = () => {
//         this.guessLetter(letter);
//       };

//       letterBtns.push(
//         <button
//           key={letter}
//           onClick={handleClick}
//         >
//           {letter}
//         </button>
//       );
//     }

//     return letterBtns;
//   }

//   guessLetter(letter) {
//     this.setState((prevState) => {
//       return {
//         guessedLetters: prevState.guessedLetters + [letter]
//       };
//     });

//     if (!this.props.word.includes(letter)) {
//       this.setState((prevState) => {
//         return {
//           numWrong: prevState.numWrong + 1
//         };
//       });
//     }
//   }

//   render() {
//     return (
//       <div>
        
//       </div>
//   );
// }


ReactDOM.render(
  <Board />,
  document.querySelector('#app')
);
