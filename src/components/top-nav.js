import React from 'react';

import './top-nav.css';
<<<<<<< HEAD
import { connect } from 'react-redux';
import {restartGame} from '../actions'
  function TopNav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a 
            href="#what" 
            className="what"
            aria-label="How to play"
          >
            What?
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className="new"
            aria-label="Start a new game"
            onClick={() => props.dispatch(restartGame(Math.round(Math.random() * 100) + 1))}
          >
            + New Game
          </a>
        </li>
        <li>
          <a
            href="#get-status"
            /* the `visuallyhidden` class hides an element 
            while leaving it available to screen reader users  */
            className="visuallyhidden focusable status-link"
            onClick={() => props.onGenerateAuralUpdate()}
          >
            Hear state of game
          </a>
        </li>
      </ul>
    </nav>
  );
=======

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a onClick={props.processForm}
                    className="what" 
                    href="#">
                        What?
                    </a>
                </li>
                <li>
                    <a onClick={(e)=>  location.reload(e)} className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
>>>>>>> 7b88fc9ea3dc3ed9816d23094e6a7e76e33240eb
}

export default connect()(TopNav)