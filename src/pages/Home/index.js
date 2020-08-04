import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import repoCategorias from '../../repositories/categorias';
import DefaultTemplate from '../../components/DefaultTemplate';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    repoCategorias.getAllWithVideos()
      .then((resposta) => setDadosIniciais(resposta));
  }, []);

  return (
    // <div style={{ background: '#141414' }}>
    <DefaultTemplate paddingAll={0}>

      {dadosIniciais.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <>
              <BannerMain
                videoTitle={categoria.videos[0].titulo}
                url={categoria.videos[0].url}
                videoDescription="O que é Front-End? Trabalhando na área os termos HTML, CSS, JavaScript fazem parte da rotina dos desenvolvedores."
              />
              <Carousel
                ignoreFirstVideo
                key={categoria.id}
                category={categoria}
              />
            </>
          );
        }
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </DefaultTemplate>
  );
}

export default Home;
