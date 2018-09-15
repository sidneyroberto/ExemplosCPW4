import React, { Component } from 'react';
import RestauranteService from '../services/RestauranteService';

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
    }

    componentDidMount() {
        this.service.recuperarTodos(this.aoCarregarOsRestaurantes);
    }

    aoCarregarOsRestaurantes(restaurantesRecuperados) {
        this.setState({ restaurantes: restaurantesRecuperados });
    }

    render() {
        const listaRestaurantes =
            this.state.restaurantes.map(restaurante => {
                return (
                    <tr key={restaurante.id}>
                        <td>{restaurante.nome}</td>
                        <td>{restaurante.endereco}</td>
                        <td>{restaurante.tiposPrato}</td>
                    </tr>
                )
            });
        return (
            <div>
                <div className="text-center">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Endereço</th>
                                <th>Tipos de prato</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaRestaurantes}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Consulta; 