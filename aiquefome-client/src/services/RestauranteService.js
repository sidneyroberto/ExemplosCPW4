import { firebaseDatabase } from '../utils/firebaseUtils';

class RestauranteService {

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