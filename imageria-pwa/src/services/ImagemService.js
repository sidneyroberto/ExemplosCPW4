import axios from 'axios';

class ImagemService {

    pesquisarImagens(consulta, callbackSucesso, callbackErro) {
        consulta = consulta.toLowerCase().trim();
        axios
            .get(`http://www.splashbase.co/api/v1/images/search?query=${consulta}`)
            .then(resposta => callbackSucesso(resposta.data))
            .catch(erro => callbackErro(erro));
    }
}

export default ImagemService;