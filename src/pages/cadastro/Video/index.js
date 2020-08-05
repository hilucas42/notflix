import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DefaultTemplate from '../../../components/DefaultTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import repoCategorias from '../../../repositories/categorias';
import repoVideos from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const emBranco = { titulo: '', url: '', categoria: '' };
  const [categorias, setCategorias] = useState([]);

  const { valoresForm, handleChange } = useForm(emBranco);

  useEffect(() => {
    repoCategorias.getAll().then((resposta) => setCategorias(resposta));
  }, []);

  return (
    <DefaultTemplate>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        const categoriaId = categorias.find((categoria) => {
          return categoria.titulo === valoresForm.categoria;
        }).id;
        repoVideos.create({
          titulo: valoresForm.titulo,
          url: valoresForm.url,
          categoriaId,
        })
          .then(() => history.push('/'));
      }}
      >
        <FormField
          label="Título do vídeo"
          name="titulo"
          value={valoresForm.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={valoresForm.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={valoresForm.categoria}
          onChange={handleChange}
          suggestions={categorias.map(({ titulo }) => titulo)}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </DefaultTemplate>
  );
}

export default CadastroVideo;
