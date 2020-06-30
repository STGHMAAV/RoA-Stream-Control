import React from "react";

import './styles/styles.scss';
import TextField from "./components/TextField";
import ScoreField from "./components/ScoreField";
import SkinSelector from "./components/SkinSelector";
import { SmashChars } from "./constants/smashchars";
import CharSelector from "./components/CharSelector";

export interface AppState {
  msg: string;
  charSelected: string;
}

export default class App extends React.Component<{}, AppState> {

  constructor({ }) {
    super({});

    this.state = {
      msg: '',
      charSelected: SmashChars[0]
    };
  }

  public onTitleChange(ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {

    this.setState({
      msg: ev.currentTarget.value
    })
  }

  /**
   * Function that updates player info with the selected character
   * @param value - Name of the character, should be from const SmashCars
   */
  public onCharChange(value: string): void {

    this.setState({
      charSelected: value
    })
  }

  public render() {
    let { charSelected } = this.state;

    return (
      <div className={'app'}>
        <div id='player1'>
          <TextField title={'Text Area'} onChange={this.onTitleChange.bind(this)} />
          <ScoreField title={'Score Player 1'} onChange={this.onTitleChange.bind(this)} />
          <CharSelector onCharChange={this.onCharChange.bind(this)}/>
          <SkinSelector selectedChar={charSelected} />
        </div>
      </div>
    );
  }
}