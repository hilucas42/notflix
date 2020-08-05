import config from '../config';

const URL_VIDEOS = `${config.HOST}/api/videos`;

function create(novoVideo) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(novoVideo),
  })
    .then((resposta) => resposta.json());
}

export default {
  create,
};
