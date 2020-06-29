import React from "react";

import './styles/styles.scss'; 
import HelloWorld from "./components/HelloWorld";

export default class App extends React.Component {
  render() {
    return (
      <div className={'app'}>
        <HelloWorld helloMsg={'illo cabesa'}/>
      </div>
    );
  }
}