import React, { Component } from 'react';
import ReactLoading from 'react-loading';

import ImagemService from '../services/ImagemService';
import Imagem from './Imagem';

class Consulta extends Component {

    constructor() {
        super();

        this.state = {
            consulta: '',
            resultados: [],
            carregando: false,
            resultadoNaoEncontrado: false
        };

        this.servico = new ImagemService();

        this.aoAlterarConsulta = this.aoAlterarConsulta.bind(this);
        this.consultar = this.consultar.bind(this);
    }

    aoAlterarConsulta(evento) {
        this.setState({ consulta: evento.target.value });
    }

    consultar() {
        this.setState({
            carregando: true,
            resultadoNaoEncontrado: false
        });

        this.servico
            .pesquisarImagens(
                this.state.consulta,
                resposta => {
                    let resultados = [];
                    resposta.hits.map(imagem => resultados.push(imagem));
                    this.setState({
                        resultados,
                        carregando: false,
                        resultadoNaoEncontrado: resultados.length === 0 ? true : false
                    });
                },
                erro => {
                    console.log(erro);
                    this.setState({ carregando: false });
                }
            );
    }

    render() {

        const listaImagens = this.state.resultados.map(resultado => {
            return (
                <div key={resultado.id}>
                    <Imagem url={resultado.webformatURL} titulo={`Imagem${resultado.id}`} />
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="input-group mb-3">
                            <input
                                onChange={this.aoAlterarConsulta}
                                value={this.state.consulta}
                                type="text"
                                className="form-control"
                                placeholder="Digite sua pesquisa" />
                            <div className="input-group-append">
                                <button
                                    onClick={this.consultar}
                                    type="button"
                                    className="btn btn-primary">
                                    Pesquisar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                {
                    this.state.carregando &&
                    <ReactLoading
                        type="bubbles"
                        color="#8c14fc"
                        width="50%" />
                }
                {
                    this.state.resultadoNaoEncontrado &&
                    <h4>Nenhuma imagem encontrada</h4>
                }
                {listaImagens}
            </div>
        );
    }
}

export default Consulta;
