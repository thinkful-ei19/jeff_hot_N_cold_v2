import React,{Component} from 'react';

import Header from './header';
import GuessSection from './guess-section';
<<<<<<< HEAD
import StatusSection from './status-section';
import InfoSection from './info-section';

export default function  Game() {

    return (
      <div>
        <Header/>
        <main role="main">
          <GuessSection  />
          <StatusSection />
          <InfoSection />
        </main>
      </div>
    );
  
}
=======
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends Component{
    constructor(props){
    super(props)
    this.state={
        guesses:[]
    }
 }
 guessInput(guess){
     this.setState({
         guesses:[...this.state.guesses,guess]
     })
 }
 render(){
    return (
        <div>
            <Header />
            <GuessSection input={(guess)=> this.guessInput(guess)} />
            <GuessCount count={3} />
            <GuessList guesses={this.state.guesses}/>
        </div>
    );
}

}
>>>>>>> 7b88fc9ea3dc3ed9816d23094e6a7e76e33240eb
