import React, {Component} from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

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