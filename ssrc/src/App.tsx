import React from "react";

import './styles/styles.scss'; 
import HelloWorld from "./components/HelloWorld";
import TextField from "./components/TextField";

export interface AppState {
  msg: string; 
}

export default class App extends React.Component<{}, AppState> {

  constructor({}) {
    super({}); 

    this.state = {
      msg: ''
    };
  }

  public onTitleChange(ev: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement>): void {

    this.setState({
      msg: ev.currentTarget.value
    })
  }

  public render() {
    let {msg} = this.state; 
    return (
      <div className={'app'}>
        <TextField title={'Text Area'} onChange={this.onTitleChange.bind(this)}/>
        <HelloWorld helloMsg={msg && msg.length > 0? msg : 'Player 1'}/>
      </div>
    );
  }
}