import React, { Component } from 'react';
import './App.css';
import logo from '../images/logo.png';
import lista from '../images/lista.png';
import adicionarItem from '../images/adicionar_item.png';

class App extends Component {
  render() {
    return (
      <div>

        <div id="topo">
          <img src={logo} alt="Logo do Lista Compras" />
          <span>Lista de Compras</span>
        </div>

        <div id="conteudo">
          <p>Produto 1</p>
          <p>Produto 2</p>
          <p>Produto 3</p>
          <p>Produto 4</p>
          <p>Produto 5</p>
          <p>Produto 6</p>
          <p>Produto 7</p>
          <p>Produto 8</p>
          <p>Produto 9</p>
          <p>Produto 10</p>
          <p>Produto 11</p>
          <p>Produto 12</p>
          <p>Produto 13</p>
          <p>Produto 14</p>
          <p>Produto 15</p>
          <p>Produto 16</p>
        </div>

        <div id="barraBotoes">
          <div className="botaoMenu">
            <a href="/">
              <img src={lista} alt="Lista de compras" />
              <br />
              <span>Lista de compras</span>
            </a>
          </div>
          <div className="botaoMenu">
            <a href="/">
              <img src={adicionarItem} alt="Adicionar item" />
              <br />
              <span>Adicionar item</span>
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
