import React from 'react';

import './guess-list.css';
<<<<<<< HEAD
import { connect } from 'react-redux';

export  function GuessList(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}

const mapStateToProps = state => ({
  guesses:state.guesses
})

export default connect(mapStateToProps)(GuessList)
=======

export default function GuessList(props) {
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));

    return (
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};
>>>>>>> 7b88fc9ea3dc3ed9816d23094e6a7e76e33240eb
