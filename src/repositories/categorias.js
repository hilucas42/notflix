import config from '../config';

const URL_CATEGORIES = `${config.HOST}/api/categorias`;
const URL_CATEGORIES_VIDEOS = `${config.HOST}/api/categorias?_embed=videos`;

function getAll() {
  return fetch(URL_CATEGORIES)
    .then((resposta) => resposta.json());
}

function getAllWithVideos() {
  return fetch(URL_CATEGORIES_VIDEOS)
    .then((resposta) => resposta.json());
}

export default {
  getAll,
  getAllWithVideos,
};
