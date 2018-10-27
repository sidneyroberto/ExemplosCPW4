import axios from 'axios';
import { urlApi } from '../utils/config';

class ImagemService {

    pesquisarImagens(consulta, callbackSucesso, callbackErro) {
        consulta = consulta.toLowerCase().trim();
        axios
            .get(urlApi(consulta))
            .then(resposta => callbackSucesso(resposta.data))
            .catch(erro => callbackErro(erro));
    }
}

export default ImagemService;