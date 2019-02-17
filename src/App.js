import React, { Component } from 'react';
import Routes from './Route';
import * as axios from 'axios'

class App extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <Routes />
    );
  }
}

export default App;
