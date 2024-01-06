import './Instructions.css';
export default function Instructions() {
  return (
    <div className="instructions-container">
      <div className='instructions-side'>

        <h2 className="instructions-header">How to play</h2>
        <p className="instructions-text">Rock, paper, scissors!</p>
        <p className="instructions-description">
          Rock, paper, scissors is a hand game in which two players choose between rock, paper, or scissors. Rock beats scissors, scissors beats paper, and paper beats rock. The player who chooses the winning option wins the round. Have fun playing!
        </p>

      </div>
    </div>
  );
}
