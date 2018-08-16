import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Contato from './Contato';

class Conteudo extends Component {

    render() {
        return (
            <Switch>
                <Route name="home" path="/home" component={Home} />
                <Route name="sobre" path="/sobre" component={Sobre} />
                <Route name="contato" path="/contato" component={Contato} />
                <Redirect from="/*" to="home" />
            </Switch>
        );
    }
}

export default Conteudo;