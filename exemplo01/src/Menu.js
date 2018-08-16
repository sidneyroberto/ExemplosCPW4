import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Menu extends Component {

    render() {
        return (
            <div>
                Menu
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </div >
        );
    }
}

export default Menu;