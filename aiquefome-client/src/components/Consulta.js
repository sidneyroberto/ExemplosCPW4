import React, { Component } from 'react';
import RestauranteService from '../services/RestauranteService';
import Restaurante from './Restaurante';

class Consulta extends Component {

    constructor() {
        super();
        this.state = {
            restaurantes: []
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
    }

    pesquisar(evento) {
        evento.preventDefault();
        /**
         * Usar o serviço de consulta
         */
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
            </div>
        );
    }
}

export default Consulta; 