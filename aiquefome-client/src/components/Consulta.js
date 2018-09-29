import React, { Component } from 'react';
import RestauranteService from '../services/RestauranteService';
import Restaurante from './Restaurante';

class Consulta extends Component {

    constructor() {
        super();
        this.state = {
            restaurantes: [],
            filtro: '',
            trouxeResultados: true
        };

        this.service = new RestauranteService();
        /**
         * Isto é necessário para que o método
         * aoCarregarOsRestaurantes consiga
         * atualizar o estado do componente, no caso,
         * a lista de restaurantes.
         */
        this.aoCarregarOsRestaurantes =
            this.aoCarregarOsRestaurantes.bind(this);
        this.pesquisar = this.pesquisar.bind(this);
        this.aoAlterarValorDoFiltro =
            this.aoAlterarValorDoFiltro.bind(this);
    }

    aoAlterarValorDoFiltro(evento) {
        let valor = evento.target.value;
        this.setState({ filtro: valor });
    }

    pesquisar() {
        let filtro = this.state.filtro.trim();
        if (filtro) {
            this.service
                .recuperarPorTiposDePrato(
                    filtro,
                    (restaurantes) => {
                        let temResultado = restaurantes.length > 0;
                        this.setState({
                            restaurantes: restaurantes,
                            trouxeResultados: temResultado
                        });
                    }
                );
        } else {
            this.setState({ restaurantes: [] });
        }
    }

    aoCarregarOsRestaurantes(restaurantesRecuperados) {
        this.setState({ restaurantes: restaurantesRecuperados });
    }

    render() {
        const listaRestaurantes =
            this.state.restaurantes.map(restaurante => {
                return (
                    <Restaurante key={restaurante.id} restaurante={restaurante} />
                )
            });
        return (
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <input
                                value={this.state.filtro}
                                onChange={this.aoAlterarValorDoFiltro}
                                type="text"
                                name="filtro"
                                className="form-control campoConsulta"
                                placeholder="O que você quer comer?" />
                            <button onClick={this.pesquisar} className="btn btn-secondary">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>

                <br />

                {
                    !this.state.trouxeResultados &&
                    <p className="text-center">Nenhum resultado</p>
                }

                {listaRestaurantes}
            </div>
        );
    }
}

export default Consulta; 