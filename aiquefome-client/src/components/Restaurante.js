import React, { Component } from 'react';

class Restaurante extends Component {

    render() {
        return (
            <div>
                <div className="card cardRestaurante">
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <img
                                        className="rounded thumbailRestaurante"
                                        alt="Foto do restaurante"
                                        src={this.props.restaurante.enderecoImagem} />
                                </div>
                                <div className="col-md-8">
                                    <h3>{this.props.restaurante.nome}</h3>
                                    <p>
                                        <b>Onde fica?</b> {this.props.restaurante.endereco}
                                    </p>
                                    <p>
                                        <b>O que tem de bom por lá?</b> {this.props.restaurante.tiposPrato}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Restaurante;