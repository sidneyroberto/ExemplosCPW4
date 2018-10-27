import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Consulta from './Consulta';

class App extends Component {
  render() {
    return (
      <div>
        <div id="banner">
          Imageria!
        </div>
        <Consulta />
      </div>
    );
  }
}

export default App;
