import React, { Component } from 'react';

class Imagem extends Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <img
                                src={this.props.url}
                                alt={this.props.titulo}
                                className="rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Imagem;
