import React, { Component } from 'react';
import ImagemService from '../services/ImagemService';
import Imagem from './Imagem';

class Consulta extends Component {

    constructor() {
        super();

        this.state = {
            consulta: '',
            resultados: [],
            carregando: false
        };

        this.servico = new ImagemService();

        this.aoAlterarConsulta = this.aoAlterarConsulta.bind(this);
        this.consultar = this.consultar.bind(this);
    }

    aoAlterarConsulta(evento) {
        this.setState({ consulta: evento.target.value });
    }

    consultar() {
        this.setState({ carregando: true });

        this.servico
            .pesquisarImagens(
                this.state.consulta,
                resposta => {
                    let resultados = [];
                    resposta.images.map(imagem => resultados.push(imagem));
                    this.setState({ resultados, carregando: false });
                },
                erro => console.log(erro)
            );
    }

    render() {

        const listaImagens = this.state.resultados.map(resultado => {
            return (
                <div key={resultado.id}>
                    <Imagem url={resultado.url} titulo={`Imagem${resultado.id}`} />
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
                {listaImagens}
            </div>
        );
    }
}

export default Consulta;
