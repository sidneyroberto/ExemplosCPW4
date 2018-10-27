const CHAVE_API = '10489463-93acebedcf5127c96f8f30bc8';
const LINGUAGEM = 'pt';
const TIPO_IMAGEM = 'photo';

export const urlApi = (consulta) =>
    encodeURI('https://pixabay.com/api/?'
        + 'q=' + consulta
        + '&key=' + CHAVE_API
        + '&lang=' + LINGUAGEM
        + '&image_type=' + TIPO_IMAGEM)
