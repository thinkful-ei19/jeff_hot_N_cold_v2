import React from 'react';
import {connect} from 'react-redux'
import './guess-count.css';

export  function GuessCount(props) {
    const isPlural = props.guessCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';

<<<<<<< HEAD
=======
import './guess-count.css';

export default function GuessCount(props) {
>>>>>>> 7b88fc9ea3dc3ed9816d23094e6a7e76e33240eb
    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.guessCount}</span> {guessNoun}!
        </h2>
    );
}
const mapStateToProps = state => ({
    guesses:state.guesses.length
  })
  
  export default connect(mapStateToProps)(GuessCount)