import React, { Component } from 'react';

import './App.css';

import Banner from './Banner';
import Menu from './Menu';
import Conteudo from './Conteudo';
import Rodape from './Rodape';

import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <div className="row">
            <div className="col" id="banner">
              <Banner />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3" id="menu">
              <Menu />
            </div>

            <div className="col-md-9" id="conteudo">
              <Conteudo />
            </div>
          </div>

          <div className="row">
            <div className="col" id="rodape">
              <Rodape />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
