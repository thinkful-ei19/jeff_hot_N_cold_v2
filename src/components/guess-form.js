import React from 'react';

import './guess-form.css';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { makeGuess } from '../actions';

export class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

      const value = this.input.value;
      this.props.dispatch(makeGuess(value));
=======

export default function GuessForm(props) {
    return (
        <form
        onSubmit={(event)=>{
        event.preventDefault();
        let guess = event.target.userGuess.value;
        props.showInput(guess)
        }}>
            <input type="text"
            
             name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required 
                />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};
>>>>>>> 7b88fc9ea3dc3ed9816d23094e6a7e76e33240eb

    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}
GuessForm.defaultProps = {

}

export default connect()(GuessForm) 