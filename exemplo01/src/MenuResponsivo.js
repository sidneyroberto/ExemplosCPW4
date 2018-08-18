import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuResponsivo extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sobre">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contato">Contato</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MenuResponsivo;