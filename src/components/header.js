import React, {Component} from 'react';

import TopNav from './top-nav';

import './header.css';

<<<<<<< HEAD
export default function Header(props) {
  return (
    <header>
      <TopNav
        onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
        onRestartGame={() => props.onRestartGame()}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}
=======
export default class Header extends Component{
    constructor(props){
    super(props)

    this.state={
        display:false
    }

}

AddYes(){
    this.setState({
      display:true
    })
  }

  TurnOff(){
      this.setState({
          display:false
      })
  }

  loadNewPage(){
      this.setState({
          reload:true
      })
  }
    render(){
    return (
        <header>
            <TopNav processForm={ () => this.AddYes() }/>
            {this.state.display && <InfoModal change={()=> this.TurnOff()}
             />}
            <h1>HOT or COLD</h1>
        </header>
    );
};

}
>>>>>>> 7b88fc9ea3dc3ed9816d23094e6a7e76e33240eb
