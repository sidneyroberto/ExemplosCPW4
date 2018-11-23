import React, { Component } from 'react';
import './App.css';
import logo from '../img/favicon.png';
import tumblr from '../img/tumblr.jpg';
import engrenagem from '../img/engrenagem.png';
import grade from '../img/grade.png';
import continuo from '../img/continuo.png';
import favoritas from '../img/favoritas.png';

class App extends Component {
  render() {
    return (
      <div>
        <div className="barraSuperior">
          <div className="logo">
            <img src={logo} alt="Logo Istragaum" />
            <span className="separador">|</span>
            <span className="titulo" >Istragaum</span>
          </div>
        </div>

        <div className="container">

          <div className="row perfil">
            <div className="col-3">
              <img src={tumblr} alt="Tumblr" className="tumblr rounded-circle" />
            </div>
            <div className="col-9">
              <div className="usuario">
                <span className="nome">sidneyroberto</span>
                <img className="imgEdicao" src={engrenagem} alt="Editar usuário" />
              </div>
              <div className="areaEdicao">
                <button className="btn">Editar perfil</button>
              </div>
            </div>
            <div className="col bio">
              <span className="nome">Sidney</span>
              <p>Computeiro, professor, fotógrafo, pai e miscelâneas...</p>
            </div>
          </div>

          <div className="row barraBotoes">
            <div className="col-4">
              <img src={grade} alt="Visualização em grade" />
            </div>
            <div className="col-4">
              <img src={continuo} alt="Visualização contínua" />
            </div>
            <div className="col-4">
              <img src={favoritas} alt="Fotos favoritas" />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
