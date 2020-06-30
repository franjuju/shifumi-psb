import React from 'react';

class Shifumi extends React.Component {

state = {
    player: null,
    computer: null,
    round: 0,
    playerScore: 0,
    computerScore: 0
  }

inputChoice(choice) {
  this.setState(() => {
    return {
      player: choice,
      computer: ["pierre", "papier", "ciseau"][Math.floor(Math.random()*3)],
      round: this.state.round + 1
    }
  }, () => this.compareChoice())
};

compareChoice() {
  let computer = this.state.computer
  let player = this.state.player

  if (
      (player === 'pierre' && computer === 'ciseau')
      || (player === 'papier' && computer === 'pierre')
      || (player === 'ciseau' && computer === 'papier')
    ) {
      this.setState({
        playerScore: this.state.playerScore + 1
      })
    }
    else if ( player !== computer) {
      this.setState({
        computerScore : this.state.computerScore + 1
      })
    }
}


 render() {
   const btn = {
     padding: '0.5rem 1rem',
     margin: '1rem',
   }

   return (
     <div style={{ backgroundColor: 'cadetblue', padding: '3rem' }}>
      A toi de jouer ! 
       <div >
         <button style={btn} onClick={()=>this.inputChoice('pierre')}>Pierre</button>
         <button style={btn} onClick={()=>this.inputChoice('feuille')}>Feuille</button>
         <button style={btn} onClick={()=>this.inputChoice('ciseau')}>Ciseau</button>
       </div>
       <div style={{ margin: '1rem' }}>
         <table>
         <div>
         </div>
           <tr>
             <th style={{ padding: '0 1rem' }}>Choix du joueur</th>
             <th>Choix de l'IA</th>
           </tr>
           <tr>
             <td>{this.state.player}</td>
             <td>{this.state.computer}</td>
           </tr>
         </table>
         <table>
           <tr>
             <th>Ton score</th>
             <th>Score de l'IA</th>
           </tr>
           <tr>
             <td>{this.state.playerScore}</td>
            <td>{this.state.computerScore}</td>
           </tr>
         </table>
      </div>
      <div>
        <p> Round: {this.state.round}</p>
      </div>
     </div>
   );
 }

  }

export default Shifumi;
