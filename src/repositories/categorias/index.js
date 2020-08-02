import config from '../../config';

function getAllWithVideos() {
  console.log(config.URL_BACKEND_TOP);
  if (window.location.href.includes('localhost')) {
    const URL_BACKEND_TOP
    fetch(URL_BACKEND_TOP)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }
  return config.URL_BACKEND_TOP;
}

export default {
  getAllWithVideos,
};