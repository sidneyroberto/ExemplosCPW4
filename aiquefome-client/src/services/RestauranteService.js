import { firebaseDatabase } from '../utils/firebaseUtils';

class RestauranteService {

    recuperarPorTiposDePrato(filtro, callback) {
        this.recuperarTodos((restaurantes) => {
            let restaurantesFiltrados =
                restaurantes.filter(
                    (restaurante) =>
                        restaurante.tiposPrato.toLowerCase().includes(filtro.toLowerCase())
                );
            callback(restaurantesFiltrados);
        });
    }

    recuperarTodos(callback) {
        firebaseDatabase
            .ref('restaurantes')
            .on('value', (snapshot) => {
                let restaurantes = [];
                snapshot.forEach(item => {
                    let restaurante = item.val();
                    restaurante.id = item.key;
                    restaurantes.push(restaurante);
                });
                callback(restaurantes);
            });
    }
}

export default RestauranteService;